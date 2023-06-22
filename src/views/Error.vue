<template>
  <div id="error-content" class="content d-flex flex-column justify-content-center align-items-center border-top border-bottom bg-light">
    <p class="my-2 text-danger">{{message ? message : '読み込みに失敗しました'}}</p>
    <router-link to="/main" tag="button" class="btn btn-link">再読み込み</router-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    message: String
  }
}
</script>

<style>
#error-content {
  height: 100%;
}
</style>
