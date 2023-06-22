<template>
  <!-- <div id="header-wrapper" class="position-relative w-100 bg-main" @mouseover="isHeaderMouseOver = true"> -->
    <!-- <div id="header-content" class="header position-absolute w-100 justify-content-between align-items-center px-4 bg-main text-dark border-bottom" :class="{'d-flex': isHeaderMouseOver}" @mouseleave="isHeaderMouseOver = false"> -->
  <div id="header-wrapper" class="position-relative w-100 bg-main">
    <!-- <div id="header-content" class="header w-100 d-flex justify-content-end align-items-center px-1 bg-main text-dark border-bottom"> -->
    <div id="header-content" class="header w-100 d-block justify-content-end align-items-center px-1 bg-main text-dark border-bottom">
      <!-- <strong class="" @click="this.$router.push('/')">LINEチャット画面</strong> -->
      <div class="left pt-1 ms-1">
        <!-- <button id="block" class="btn btn-sm btn-light" v-bind:class="{'d-none': block_status === true}" @click="block">ブロック</button>
        <button class="btn btn-sm btn-light" v-bind:class="{'d-none': block_status === false}" @click="block">ブロック解除</button>
        <span class="ms-2 fw-bold text-white" v-bind:class="{'d-none': block_status === false}">ブロックしています。ブロック中は動画・音声ファイルの受信ができません</span> -->
        <div hidden>ブロックステータス：{{block_status}}</div>
        <div v-if="block_status">
          <button class="btn btn-sm btn-light" @click="block">ブロック解除</button>
          <span class="ms-2 fw-bold text-white">ブロックしています。ブロック中は動画・音声ファイルの受信ができません</span>
        </div>
        <div v-else>
          <button id="block" class="btn btn-sm btn-light" @click="block">ブロック</button>
        </div>
      </div>
      <div class="right pt-1">
        <button v-if="false" id="reload_btn" class="btn btn-sm btn-outline-dark mx-1" @click="reload">更新</button>
        <span v-if="false" id="auto-reload-switch" class="form-check form-switch mx-1">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="isAutoReload" checked>
          <label class="form-check-label" for="flexSwitchCheckDefault">自動更新</label>
        </span>
        <button class="btn btn-sm btn-light ms-3" @click="endSupport">終了</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Header',
  props: {
    block_status: {
      type: Boolean,
      required: true
    },
    reload: {
      type: Function,
      required: true
    },
    toggleAutoReload: {
      type: Function,
      required: true
    },
    supportNotification: {
      type: Function,
      required: true
    },
    setBlockFlg: {
      type: Function,
      required: true
    }
  },
  setup(props){
    const router = useRouter();
    const isHeaderMouseOver = ref(false);
    const isAutoReload = ref(true);

    watchEffect(() => {
        props.toggleAutoReload(isAutoReload.value);
      },
      {
        flush: 'post'
      }
    );

    const stopAutoReload = () => {
      isAutoReload.value = false;
    };

    const endSupport = async () => {
      stopAutoReload();
      await props.supportNotification("end");
      router.replace('/');
    };

    const block = async () => {
      await props.setBlockFlg().catch((err) => {
        console.error(err);
      });
    };

    return {
      isHeaderMouseOver,
      isAutoReload,
      stopAutoReload,
      endSupport,
      block
    }
  }

}
</script>

<style>
#header-wrapper {
  /* min-height: 8px; */
  z-index: 1
}
/* #header-wrapper:before,
#header-wrapper:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
#header-wrapper:after {
  top: 7px;
  border-style: solid;
  border-width: 6px 7.5px 0 7.5px;
  border-color: var(--bs-main) transparent transparent transparent;
  z-index: 2;
}
#header-wrapper:before {
  top: 8px;
  border-style: solid;
  border-width: 6px 7.5px 0 7.5px;
  border-color: #dee2e6 transparent transparent transparent;
  z-index: 0;
} */
#header-content {
  height: 40px;
  display: none;
}
#auto-reload-switch {
  margin-bottom: 0;
  margin-top: 0.125rem;
}
#reload_btn {
  display: none;
}

#end_btn {
  width: 60px;
}
strong:hover{
  cursor: pointer;
}
.left{
  text-align: left;
  float: left;
}
.right{
  text-align: right;
}
</style>
