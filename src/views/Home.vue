<template>
  <div ref="root" class="home d-flex justify-content-center align-items-center w-100 h-100">
    <router-link to="/main" tag="button" class="btn btn-main" replace>チャットを始める</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {}
}
</script>
