<template>
  <div class="alert w-100" :class="'alert-' + type" role="alert">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: "danger"
    },
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#alert-wrapper{
  width: 100%;
  position: absolute;
  top: 55px;
  display: flex;
  justify-content: center;
}
</style>
