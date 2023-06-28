<template>
<transition name="fade">
  <div v-if="!isLoaded" id="loading-window">
    <LoadingSpinner/>
  </div>
</transition>
<div class="main h-100 w-100 d-flex flex-column">
  <Header ref="header" :block_status="block_status" :reload="getNewLINEChatData" :supportNotification="supportNotification" :toggleAutoReload="toggleAutoReload" :setBlockFlg="setBlockFlg" :getBlockFlg="getBlockFlg"></Header>
  <div class="content d-flex flex-column flex-fill border-top border-bottom overflow-auto" :class="terminal" @scroll="handleScroll">
    <div :class="{'d-none': chatLogs.length == 0}">
      <button class="btn btn-outline-accent mt-2" @click="getOldLINEChatData">過去チャットの取得</button>
    </div>
    <Balloon
      ref="content"
      v-for="chat in chatLogs"
      v-bind:key="chat.chatId"
      :chatId="chat.chatId"
      :type="chat.type"
      :speaker="chat.speaker"
      :message="chat.message"
      :url="chat.url"
      :timestamp="chat.timestamp"
      :isFirstLoad="chat.isFirstLoad"
      :isViewDate="chat.isViewDate"
      :contentScroll="contentScroll"
      :openPreview="openPreview"></Balloon>
  </div>
  <Footer :sendChat="sendChat" :getPresignedUrl="getPresignedUrl" :uploadFile="uploadFile"></Footer>
  <Preview v-show="previewInfo.isShow" :closePreview="closePreview" :class="terminal" :type="previewInfo.tag" :src="previewInfo.src" />
  <!-- アラート表示 -->
  <div id="alert-wrapper">
    <transition-group name="alert-fade" tag="Alert" class="w-75">
      <div v-for="(alertConfig, index) in alertList" :key="index" class="w-100">
        <Alert :class="index" :type="alertConfig.type" :msg="alertConfig.msg" />
      </div>
    </transition-group>
  </div>
  <!-- 新規メッセージ通知 -->
  <div v-if="newMessageCount > 0" id="new-message-button-wrapper">
    <button class="btn btn-sm" @click="scrollBottom">{{ newMessageCount }}件の新規メッセージ</button>
  </div>
</div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import ZohoLINE from '../lib/ZohoLINE.js';

import Header from '../components/Header.vue';
import Balloon from '../components/Balloon.vue';
import Footer from '../components/Footer.vue';

import Preview from '../components/Preview.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import Alert from '../components/Alert.vue';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

export default {
  name: 'Main',
  components: {
    Header,
    Balloon,
    Footer,
    LoadingSpinner,
    Preview,
    Alert
  },
  setup() {
    console.log("setup");
    const USER_TYPE_OBJ = {
      0: "right",
      1: "left"
    };
    const CHAT_TYPE_OBJ = {
      0: "text",
      1: "sticker",         // スタンプ
      2: "image",           // 画像
      3: "video",           // 動画
      4: "audio",           // 音声
      5: "application",     // PDF
      6: "richMessage",     // リッチメッセージ
      7: "richVideoMessage" // リッチビデオメッセージ
    };
    const AUTO_RELOAD_INTERVAL = 1 * 1000;
    // ZohoLINEクラス
    let ZLC = null;
    // Zohoプラグイン
    const ZOHO = window.ZOHO;
    // vue-router
    const router = useRouter();
    // 読み込みフラグ
    const isLoaded = ref(false);
    // Zoho CRMログインユーザーデータ
    const currentUser = ref("");
    // Zohoレコードデータ
    const lineUserData = ref("");
    // 顧客ID
    const lineUserId = ref("");
    // LINEチャットログ
    const chatLogs = ref([]);
    //LINE既読時間
    // const last_read_time = ref("0");
    const last_read_time = ref(dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"));
    //取得した一番古いLINEチャットの時間
    const oldest_chat_time = ref(dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"));
    // ZohoLINEの契約企業ID
    const companyId = ref('');
    // ZohoLINEのチャンネルID
    const channelId = ref('');
    // ZohoLINEのAPIキー
    const apiKey = ref('');
    //ヘッダーのDOM
    const header = ref(null);
    //チャット表示エリアのDOM
    const content = ref(null);
    //チャット表示エリアのスクロール位置
    const contentScrollPosition = ref(null);
    //スクロール位置が一番下であるか
    const isBottomScrollPosition = ref(null);
    // 最初のチャットデータ取得フラグ
    const isFirstGetChatData = ref(true);
    // 自動更新を行うsetIntervalのID
    const autoReloadId = ref(null);
    // 自動更新の自動停止時間(自動更新開始から６時間後に自動停止) dayjsオブジェクト
    const autoReloadLimitTime = ref(null);
    // 端末の識別用変数
    const terminal = ref("pc");
    // アラート表示用変数
    const alertList = ref([]);
    // コンテンツプレビュー用変数
    const previewInfo = reactive({
      isShow: false,
      tag: "img",
      src: ""
    });
    // 新規メッセージ未表示件数
    const newMessageCount = ref(0);
    // ブロックフラグ
    const block_status = ref(false);

    watchEffect(
      () => {
        contentScroll();
      },
      {
        flush: 'post'
      }
    );

    onMounted(async () => {
      console.log("onMounted");
      const appElement = document.getElementById("app");
      getTerminal();
      window.addEventListener('resize', getTerminal);
      //Zohoプラグインの初期化完了時
      ZOHO.embeddedApp.on("PageLoad", (data) => {
        appElement.classList.add('loaded');
        appElement.dataset.entity = data.Entity;
        appElement.dataset.entityId = data.EntityId;
        // ZohoLINEの必要なデータの取得
        initialize(data);
      });
      //Zohoプラグインの初期化
      ZOHO.embeddedApp.init();
      if(appElement.classList.contains('loaded')){
        initialize({
          Entity: appElement.dataset.entity,
          EntityId: appElement.dataset.entityId
        });
      }
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
      if(autoReloadId.value != null){
        clearTimeout(autoReloadId.value);
        autoReloadId.value = null;
      }
      window.removeEventListener('resize', getTerminal);
    });

    const initialize = async (data) => {
      try {
        isFirstGetChatData.value = true;
        //LINEユーザーデータの取得
        lineUserData.value = await getZohoCustomerId(data.Entity, data.EntityId);
        lineUserId.value = lineUserData.value.LINE_ID;
        // ZohoLINEのAPIキーの取得
        const zohoLineConfig = await getZohoCRMVariables({apiKeys:["zoho_line_api_key", "zoho_line_company_id", "zoho_line_channel_id"]});
        if(zohoLineConfig.zoho_line_company_id.value){
          companyId.value = zohoLineConfig.zoho_line_company_id.value;
        }else{
          throw new Error("契約企業IDが見つかりませんでした");
        }
        if(zohoLineConfig.zoho_line_api_key.value){
          apiKey.value = zohoLineConfig.zoho_line_api_key.value;
        }else{
          throw new Error("ZohoLINE APIキーが見つかりませんでした");
        }
        if(zohoLineConfig.zoho_line_channel_id.value){
          channelId.value = zohoLineConfig.zoho_line_channel_id.value;
        }else{
          throw new Error("ZohoLINE チャンネルIDが見つかりませんでした");
        }
        ZLC = new ZohoLINE(companyId.value, channelId.value, apiKey.value);
        // ブロックステータスの取得
        const userData = await ZLC.getBlockFlg(lineUserId.value);
        block_status.value = userData.block_status;
        console.log("ブロックステータス：",block_status.value);
        currentUser.value = await getCurrentUser();
        await supportNotification("start");
        toggleAutoReload(false);
        toggleAutoReload(true);
        isLoaded.value = true;
      } catch (err) {
        console.error(err);
        router.push({name: 'Error', params: { message: err.message }});
      }
    };

    const getPresignedUrl = async (fileExtension) => {
      const presignedUrl = await ZLC.getPresignedUrl(lineUserId.value, fileExtension);
      return presignedUrl.contentUploadUrl;
    }

    const uploadFile = async (presignedUrl, file) => {
      console.log("file", file);
      await ZLC.uploadFile(presignedUrl, file).catch((err) => {
        console.error(err);
      });
    }

    const sendChat = async (message, type, file=null) => {
      // メッセージ送信
      if (type == "text") {
        await ZLC.sendChat(lineUserId.value, message).catch((err) => {
          console.error(err);
          if(err.responseJSON.type == "Remaining" ){
            showAlert("danger", "送信上限数を超えたため、送信に失敗しました。");
          } else {
            showAlert("danger", "メッセージの送信に失敗しました");
          }
        });
      // スタンプ送信
      }else if(type == "sticker"){
        await ZLC.sendStickerChat(lineUserId.value, message).catch((err) => {
          console.error(err);
          if(err.responseJSON.type == "Remaining" ){
            showAlert("danger", "送信上限数を超えたため、送信に失敗しました。");
          } else {
            showAlert("danger", "スタンプの送信に失敗しました");
          }
        });
      // 画像送信
      }else if(type == "image"){
        await ZLC.sendImageChat(lineUserId.value, file).catch((err) => {
          console.error(err);
          if(err.responseJSON.type == "Remaining" ){
            showAlert("danger", "送信上限数を超えたため、送信に失敗しました。");
          } else {
            showAlert("danger", "画像の送信に失敗しました");
          }
        });
      // 動画送信
      }else if(type == "video"){
        await ZLC.sendVideoChat(lineUserId.value, file).catch((err) => {
          console.error(err);
          if(err.responseJSON.type == "Remaining" ){
            showAlert("danger", "送信上限数を超えたため、送信に失敗しました。");
          } else {
            showAlert("danger", "動画の送信に失敗しました");
          }
        });
      // 音声送信
      }else if(type == "audio"){
        await ZLC.sendAudioChat(lineUserId.value, file).catch((err) => {
          console.error(err);
          if(err.responseJSON.type == "Remaining" ){
            showAlert("danger", "送信上限数を超えたため、送信に失敗しました。");
          } else {
            showAlert("danger", "音声の送信に失敗しました");
          }
        });
      // PDF送信
      }else if(type == "application"){
        await ZLC.sendPdfChat(lineUserId.value, file).catch((err) => {
          console.error(err);
          if(err.responseJSON.type == "Remaining" ){
            showAlert("danger", "送信上限数を超えたため、送信に失敗しました。");
          } else {
            showAlert("danger", "PDFの送信に失敗しました");
          }
        });
      }
      isBottomScrollPosition.value = null;
      // await getNewLINEChatData();
    };

    // LINE連携済みの顧客IDの取得
    const getZohoCustomerId = (entity, recordId) => {
      return new Promise((resolve, reject) => {
        ZOHO.CRM.API.getRecord({
          Entity: entity,
          RecordID: recordId
        }).then((response) => {
          // console.log(response);
          if (response.data && response.data[0]) {
            resolve(response.data[0]);
          } else {
            reject();
          }
        }).catch((err) => {
          reject(err);
        });
      });
    };

    //CRMの変数からZohoLINEのAPIキーを取得
    const getZohoCRMVariables = (apiName) => {
      return new Promise((resolve, reject) => {
        ZOHO.CRM.API.getOrgVariable(apiName).then((response) => {
          console.log(response);
          if (response.Success) {
            resolve(response.Success.Content);
          } else {
            reject(response);
          }
        }).catch((err) => {
          console.error(err);
          reject(err);
        });
      });
    };

    // ログインユーザーデータの取得
    const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
        ZOHO.CRM.CONFIG.getCurrentUser().then((response) => {
          try{
            resolve(response.users[0]);
          }catch(err){
            console.error(err);
            reject(err);
          }
        }).catch((err) => {
          console.error(err);
          reject(err);
        });
      });
    };

    const supportNotification = (type) => {
      return new Promise((resolve, reject) => {
        const functionName = "supportnotification";
        const requestData = {
          arguments: JSON.stringify({
            type: type,
            currentUserName: currentUser.value.full_name,
            contactName: lineUserData.value.Full_Name,
            contactId: lineUserData.value.id
          })
        };
        ZOHO.CRM.FUNCTIONS.execute(functionName, requestData).then(function(response){
          resolve(response);
        }).catch((err) => {
          console.error(err);
          reject(err);
        });
      });
    };

    // LINEチャットデータの取得
    const getLINEChatData = async () => {
      const lineChatData = await ZLC.getChat(lineUserId.value);
      // console.log(lineChatData)
      let lineChatArray = [];
      for (let chat of lineChatData.chats) {
        let url = null;
        if(chat.media_url){
          // スタンプの場合はアドレスをそのまま指定
          if(chat.chat_type == 1){
              url = chat.media_url;
          // スタンプ以外の場合はS3のパスを取得し指定
          } else {
              // url = ZLC.getMedia(chat.media_url)
              url = ZLC.getMedia(chat.chat_id);
          }
        }

        lineChatArray.push({
          chatId: chat.chat_id,
          speaker: USER_TYPE_OBJ[chat.user_type],
          type: CHAT_TYPE_OBJ[chat.chat_type],
          message: chat.text,
          // url: chat.media_url ? ZLC.getMediaURL(chat.media_url) : null,
          // url: chat.media_url ? ZLC.getMedia(chat.media_url) : null,
          url: url,
          timestamp: chat.sent_at,
          isFirstLoad: true
        });
        console.log("LINE取得");
        console.log(chat.sent_at);
        updateChatReadTime(chat.sent_at);
      }
      updateChatLogs(lineChatArray);
    };
    // 新規LINEチャットデータの取得
    const getNewLINEChatData = async () => {
      const lineChatData = await ZLC.getNewChat(lineUserId.value, last_read_time.value);
      let lineChatArray = chatLogs.value;
      for (let chat of lineChatData.chats) {
        let url = null;
        if(chat.media_url){
          // スタンプの場合はアドレスをそのまま指定
          if(chat.chat_type == 1){
              url = chat.media_url;
          // スタンプ以外の場合はS3のパスを取得し指定
          } else {
              // url = ZLC.getMedia(chat.media_url)
              url = ZLC.getMedia(chat.chat_id);
          }
        }
          lineChatArray.push({
            chatId: chat.chat_id,
            speaker: USER_TYPE_OBJ[chat.user_type],
            type: CHAT_TYPE_OBJ[chat.chat_type],
            message: chat.text,
            // url: chat.media_url ? ZLC.getMedia(chat.media_url) : null,
            url: url,
            timestamp: chat.sent_at,
            isFirstLoad: false
          });
          console.log("新規LINE取得");
          console.log(chat.sent_at);
          updateChatReadTime(chat.sent_at);
      }
      updateChatLogs(lineChatArray);
      if(isBottomScrollPosition.value === false){
        newMessageCount.value = newMessageCount.value + lineChatData.chats.length;
      }else{
        newMessageCount.value = 0;
      }
    };
    // 過去LINEチャットデータの取得
    const getOldLINEChatData = async () => {
      // チャット取得前のチャット表示エリアの高さを保存
      contentScrollPosition.value = content.value.$el.parentElement.scrollHeight;
      // console.log("getOldLINEChatData", contentScrollPosition.value)
      const lineChatData = await ZLC.getOldChat(lineUserId.value, oldest_chat_time.value, 10);
      let lineChatArray = chatLogs.value;
      for (let chat of lineChatData.chats) {
        let url = null;
        if(chat.media_url){
          // スタンプの場合はアドレスをそのまま指定
          if(chat.chat_type == 4){
              url = chat.media_url;
          // スタンプ以外の場合はS3のパスを取得し指定
          } else {
              // url = ZLC.getMedia(chat.media_url)
              url = ZLC.getMedia(chat.chat_id);
          }
        }
        lineChatArray.push({
          chatId: chat.chat_id,
          speaker: USER_TYPE_OBJ[chat.user_type],
          type: CHAT_TYPE_OBJ[chat.chat_type],
          message: chat.text,
          // url: chat.media_url ? ZLC.getMedia(chat.media_url) : null,
          url: url,
          timestamp: chat.sent_at,
          isFirstLoad: false
        });
        console.log("過去LINE取得");
        console.log(chat.sent_at);
        updateChatReadTime(chat.sent_at);
      }
      updateChatLogs(lineChatArray);
    };

    const toggleAutoReload = (isAutoReload) => {
      console.log("toggleAutoReload");
      if(isAutoReload && autoReloadId.value == null){
        // 6時間後に自動更新をオフ
        autoReloadLimitTime.value = dayjs().add(6, 'h');
        autoReloadId.value = setInterval(async () => {
          if(isFirstGetChatData.value){
            isFirstGetChatData.value = false;
            await getLINEChatData();
          }else if(dayjs().isBefore(autoReloadLimitTime.value)){
            await getNewLINEChatData();
          }else{
            header.value.stopAutoReload();
          }
        }, AUTO_RELOAD_INTERVAL);
      }else if(!isAutoReload && autoReloadId.value != null){
        clearTimeout(autoReloadId.value);
        autoReloadId.value = null;
        autoReloadLimitTime.value = null;
      }
    };
    // チャット表示エリアのスクロールハンドル
    const handleScroll = () => {
      const target = content.value.$el.parentElement;
      contentScrollPosition.value = null;
      if(target.scrollTop + target.clientHeight  == target.scrollHeight){
        isBottomScrollPosition.value = true;
        newMessageCount.value = 0;
      }else{
        isBottomScrollPosition.value = false;
      }
    };

    // chatLogsの更新
    const updateChatLogs = (lineChatArray) => {
      chatLogs.value = lineChatArray.sort((x, y) => {
        if (x.chatId < y.chatId) return -1;
        if (x.chatId > y.chatId) return 1;
        return 0;
      });
      let sentDate = dayjs(0);
      chatLogs.value.forEach((chatLog, i) => {
        if(sentDate.isBefore( dayjs(chatLogs.value[i].timestamp.split(" ")[0], "YYYY-MM-DD"))){
          sentDate = dayjs(chatLogs.value[i].timestamp.split(" ")[0], "YYYY-MM-DD");
          chatLogs.value[i].isViewDate = true;
        }else{
          chatLogs.value[i].isViewDate = false;
        }
      });
      // console.log(chatLogs)
    };

    // 新規チャット、過去チャット取得のための時間の更新
    const updateChatReadTime = (sent_at) => {
      if (dayjs(oldest_chat_time.value, "YYYY-MM-DD HH:mm:ss.SSS").isAfter(dayjs(sent_at, "YYYY-MM-DD HH:mm:ss.SSS"))) {
        oldest_chat_time.value = sent_at;
      }
      if (dayjs(last_read_time.value, "YYYY-MM-DD HH:mm:ss.SSS").isBefore(dayjs(sent_at, "YYYY-MM-DD HH:mm:ss.SSS"))) {
        last_read_time.value = sent_at;
      }
      console.log(oldest_chat_time.value)
    };

    // LINEチャット表示エリアの自動スクロール
    // -過去のチャット読み込み時はスクロール位置固定
    // -最新チャット読み込み時は一番下までスクロール
    const contentScroll = (isFirstLoad=false) => {
      if(content.value){
        const target = content.value.$el.parentElement;
        setTimeout(() => {
          if(isFirstLoad){
            target.scrollTop = target.scrollHeight;
          }else if(contentScrollPosition.value != null){
            target.scrollTop = target.scrollHeight - contentScrollPosition.value;
          }else if(isBottomScrollPosition.value == null || isBottomScrollPosition.value == true){
            target.scrollTop = target.scrollHeight;
          }
        }, 0);
      }
    };

    const getTerminal = () => {
      if(window.outerWidth > window.outerHeight){
        terminal.value = "pc";
      }else{
        terminal.value = "sp"
      }
    };

    const openPreview = (tag, src) => {
      previewInfo.isShow = true;
      previewInfo.tag = tag;
      previewInfo.src = src;
    };

    const closePreview = () => {
      previewInfo.isShow = false;
    };

    const showAlert = (type, msg) => {
      if(type){
        alertList.value.push({
          type: type,
          msg: msg
        });
        setTimeout(function () {
          alertList.value.shift();
        }, 2500);
      }
    };

    const scrollBottom = () => {
      if(content.value){
        const target = content.value.$el.parentElement;
        target.scrollTop = target.scrollHeight;
      }
    };

    const getBlockFlg = async () => {
      console.log(lineUserId.value);
      return await ZLC.getBlockFlg(lineUserId.value).catch((err) => {
          console.error(err);
      });
    }

    const setBlockFlg = async () => {
        console.log(lineUserId.value);
        block_status.value = !block_status.value;
        console.log("ブロックステータス：",block_status.value);
        await ZLC.setBlockFlg(lineUserId.value, block_status.value).catch((err) => {
          console.error(err);
        });
        if(block_status.value){
          showAlert("success", "ブロックしました。");
        } else {
          showAlert("success", "ブロック解除しました。");
        }
    };
    return {
      header,
      content,
      chatLogs,
      sendChat,
      getPresignedUrl,
      uploadFile,
      getNewLINEChatData,
      getOldLINEChatData,
      toggleAutoReload,
      contentScroll,
      handleScroll,
      isLoaded,
      terminal,
      previewInfo,
      openPreview,
      closePreview,
      alertList,
      showAlert,
      supportNotification,
      newMessageCount,
      scrollBottom,
      block_status,
      getBlockFlg,
      setBlockFlg
    };
  }
}
</script>
<style scoped>
#loading-window {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 9999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.content {
  background-color: #b0d2ff;
}
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.2s ease;
}

.alert-fade-enter-from,
.alert-fade-leave-to {
  opacity: 0;
}
#alert-wrapper{
  width: 100%;
  max-height: 80%;
  position: absolute;
  top: 55px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
}
#new-message-button-wrapper {
  position: absolute;
  bottom: 55px;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  pointer-events: none;
}
#new-message-button-wrapper button {
  color: #ffffff;
  background-color: #00000099;
  pointer-events: auto;
}
</style>
