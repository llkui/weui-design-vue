<template>
  <router-link :to="'/'" class="Logo">
    <img src="./../assets/logo.png" alt="logo.png" />
    <strong>Weui-Design-Vue</strong>
  </router-link>
</template>
<script>
export default {
  data () {
    return {
      size: 36
    }
  }
}
</script>
<style lang="scss" scoped>
.Logo {
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;

  img {
    margin-left: 15px;
    margin-right: 10px;
    height: 40px;
  }
}
</style>