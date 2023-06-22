<template>
  <div id="preview">
    <div class="d-flex justify-content-between align-items-center">
      <div id="new-open-tab" class="text-light mx-2" @click="openPreviewContent">新しいタブで開く</div>
      <div id="close-btn" class="text-light m-2 h-auto w-auto" @click="closePreview">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
          <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center" @click="closePreview" style="height: calc(100% - 52px)">
      <img v-if="type === 'img'" :src="src" class="content" >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Preview',
  props: {
    type: String,
    src: String,
    closePreview: Function
  },
  setup(props){
    const openPreviewContent = () => {
      window.open(props.src, "_blank", "noopener noreferrer");
    }
    return {
      openPreviewContent
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#preview {
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #000000db;
  z-index: 9999;
}

#close-btn, #new-open-tab {
  cursor: pointer;
}

.content {
  width: 100%;
  height: 70%;
  object-fit: contain;
  background-color: inherit;
}
</style>
