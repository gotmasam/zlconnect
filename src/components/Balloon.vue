<template>
  <div v-if="isViewDate" class="m-2"><span class="bg-white border border-main padding-balloon rounded-pill">{{ viewDate }}</span></div>
  <div class="balloon" :class="speaker">
    <div :class="{active: !isContentLoaded && (type === 'image' || type === 'video')}" class="spinner-border" role="status">
      <span class="visually-hidden">読込中...</span>
    </div>
    <p v-if="type === 'text'" class="message padding-balloon" v-html="autoLink(message)"></p>
    <img v-else-if="type === 'sticker'" :src="url" @load="contentLoaded" class="sticker">
    <img v-else-if="type === 'image'" :src="url" @load="contentLoaded" @click="clickedImage">
    <video v-else-if="type === 'video'" :src="url + '#t=0.001'" @loadedmetadata="contentLoaded" controls playsinline></video>
    <audio v-else-if="type === 'audio'" :src="url" controls></audio>
    <a v-else-if="type === 'application'" :href="url" class="message padding-balloon" target="_blank" rel="noopener noreferrer">{{ url }}</a>
    <img v-else-if="type === 'richMessage'" :src="url" @load="contentLoaded" @click="clickedImage">
    <video v-else-if="type === 'richVideoMessage'" :src="url + '#t=0.001'" @loadedmetadata="contentLoaded" controls playsinline></video>
    <div v-else-if="type === 'flexMessage'" class="message flexMessage" v-html="chatbotBaloon(url, title, message)"></div>
    <span class="timestamp text-muted mx-1">{{ tStamp }}</span>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

export default {
  name: 'Balloon',
  props: {
    chatId: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: true
    },
    title:{
      type: String
    },
    message: {
      type: String
    },
    url: {
      type: String
    },
    timestamp: {
      type: String,
      required: true
    },
    isFirstLoad: {
      type: Boolean,
      required: true
    },
    isViewDate: {
      type: Boolean,
      required: true
    },
    contentScroll: {
      type: Function
    },
    openPreview: {
      type: Function
    }
  },
  setup(props){
    // 送信時間の表示
    const tStamp = computed(() => dayjs(props.timestamp, "YYYY-MM-DD HH:mm:ss.SSS").format("HH:mm"));
    // 日付の表示
    const viewDate = computed(() => {
      if(dayjs().isSame( dayjs(props.timestamp, "YYYY-MM-DD HH:mm:ss.SSS"), "day" )){
        return "本日";
      }else{
        return dayjs(props.timestamp, "YYYY-MM-DD HH:mm:ss.SSS").format("MM/DD");
      }
    });
    // 画像と動画の読み込みフラグ
    const isContentLoaded = ref(false);

    const contentLoaded = () => {
      isContentLoaded.value = true;
      setTimeout(() => {
        props.contentScroll(props.isFirstLoad);
      }, 0);
    }

    const autoLink = (message) => {
    console.log(message);
    return message.replace(/(https?:\/\/[^\s]*)/g, "<a href='$1' target='_blank'>$1</a>");
    }

    const chatbotBaloon = (url, title, message) => {
      const html = `<div class="kv-flex-bubble kilo pc border border-secondary" style="width: 16.25em;">
          <div class="kv-flex-bubble-content">
            <div class="flex-hero">
              <div class="kv-flex-image fit full" >
                <div style="width: 100%; background-color: rgb(255, 255, 255);">
                  <img style="width: 100%;" src=${url}>
              </div>
            </div>
            <div  class="flex-body has-footer">
              <div class="kv-flex-box vertical"  style="flex-direction: column; padding: 13px 13px 17px;">
                <div class="kv-flex-text multiline" style="color: rgb(0, 0, 0); font-size: 1em; font-weight: 700; top: -3px; text-align:left;">
                  <div>${title}</div>
                </div>
                <div class="kv-flex-text multiline" style="color: rgb(85, 85, 85); font-size: 0.875em; text-align:left;">
                  <div>${message}</div>
                </div>
              </div>
            </div>
            <!--
            // TODO：アクションボタンの表示は要検討
            <div class="kv-flex-separator" style="border-color: rgb(229, 229, 229);"></div>
            <div  class="flex-footer">
              <div class="kv-flex-box vertical"  style="flex-direction: column; padding: 0px;">
                <div class="kv-flex-box vertical" style="flex-direction: column; padding-top: 14px; padding-bottom: 13px;">
                  <div class="kv-flex-box vertical" style="cursor: pointer; flex-direction: column; height: 30px; justify-content: center;">
                    <div class="kv-flex-text" style="color: rgb(66, 101, 154); text-align: center; font-size: 0.9375em;">
                      <div >詳しくはこちら！</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            --!>
          </div>
        </div>`;
      return html;
    }

    //画像クリック時に別タブで画像を開く
    const clickedImage = (event) => {
      props.openPreview(event.target.tagName.toLowerCase(), event.target.src);
    }

    return {
      tStamp,
      viewDate,
      clickedImage,
      isContentLoaded,
      contentLoaded,
      autoLink,
      chatbotBaloon
    }
  }
}
</script>

<style scoped>
.balloon {
  margin: 5px 0;
  display:flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.balloon.left {
  margin-left: 15px;
}
.balloon.right {
  margin-right: 15px;
  flex-flow: row-reverse;
}.balloon.right .flexMessage {
  color: #111111;
  background-color: #fff;
  border: 1px solid var(--vps-main-theme);
}
p,a {
  max-width: 60%; /*最大幅は任意*/
  overflow-wrap: break-word;
  white-space: pre-wrap;
  text-align: start;
  border-radius: 12px;
  margin:0 !important;
  line-height:1.5;
}
img {
  cursor: pointer;
}
.pc img, .pc video {
  max-width: 20%;
}
.sp img, .sp video {
  max-width: 70%;
}

img, video {
  border-radius: 6px;
}
.balloon.right p,a {
  color: #fff;
  background-color: var(--bs-accent);
}
.balloon.right p >>> a {
  color: #fff;
  background-color: var(--bs-accent);
}
.balloon.right a:hover {
	color:#C0C0C0; 	/*リンクにマウスが乗ったら背景色を変更する*/
}
.balloon.right p >>> a:hover {
	color:#C0C0C0; 	/*リンクにマウスが乗ったら背景色を変更する*/
}
.balloon.left a:hover {
	color:#2d38bb; 	/*リンクにマウスが乗ったら背景色を変更する*/
}
.balloon.left p >>> a:hover {
	color:#2d38bb; 	/*リンクにマウスが乗ったら背景色を変更する*/
}
.balloon.left p {
  color: #000;
  background-color: #fff;
  border: 1px solid var(--bs-accent);
}

.timestamp {
  font-size: 70%
}
.padding-balloon {
  padding: 1px 10px;
}
</style>
