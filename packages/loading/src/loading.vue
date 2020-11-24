<template>
  <span :class="loadingClass">
    <span class="weui-primary-loading__dot" v-if="type"></span>
  </span>
</template>
<script>
export default {
  name: 'WeuiLoading',
  data () {
    return {
      loadingClass: null
    }
  },
  props: {
    type: {
      type: String,
      default: null
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let loadingClass = '';
      switch (this.type) {
        case 'primary':
          loadingClass = 'weui-primary-loading'
          break;
        case 'brand':
          loadingClass = 'weui-primary-loading weui-primary-loading_brand'
          break;
        case 'transparent':
          loadingClass = 'weui-primary-loading weui-primary-loading_transparent'
          break;
        default:
          loadingClass = 'weui-loading'
          break;
      }
      this.loadingClass = loadingClass
    })
  }
}
</script>