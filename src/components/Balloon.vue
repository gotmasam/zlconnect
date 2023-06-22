<template>
  <div v-if="isViewDate" class="m-2"><span class="bg-white border border-main padding-balloon rounded-pill">{{ viewDate }}</span></div>
  <div class="balloon" :class="speaker">
    <div :class="{active: !isContentLoaded && (type === 'image' || type === 'video')}" class="spinner-border" role="status">
      <span class="visually-hidden">読込中...</span>
    </div>
    <p v-if="type === 'text'" class="message padding-balloon">{{ message }}</p>
    <img v-else-if="type === 'sticker'" :src="url" @load="contentLoaded" class="sticker">
    <img v-else-if="type === 'image'" :src="url" @load="contentLoaded" @click="clickedImage">
    <video v-else-if="type === 'video'" :src="url + '#t=0.001'" @loadedmetadata="contentLoaded" controls playsinline></video>
    <audio v-else-if="type === 'audio'" :src="url" controls></audio>
    <a v-else-if="type === 'application'" :href="url" class="message padding-balloon" target="_blank" rel="noopener noreferrer">{{ url }}</a>
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

.balloon.right a:hover {
	color:#C0C0C0; 	/*リンクにマウスが乗ったら背景色を変更する*/
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
