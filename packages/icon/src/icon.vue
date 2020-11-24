<template>
  <i :class="iconClass"></i>
</template>
<script>
export default {
  name: 'WeuiIcon',
  data () {
    return {
      iconClass: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'success'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let iconClass = '';
      switch (this.type) {
        case 'info':
          iconClass = 'weui-icon-info weui-icon_msg'
          break;
        case 'warn-primary':
          iconClass = 'weui-icon-warn weui-icon_msg-primary'
          break;
        case 'warn':
          iconClass = 'weui-icon-warn weui-icon_msg'
          break;
        case 'waiting':
          iconClass = 'weui-icon-waiting weui-icon_msg'
          break;
        default:
          iconClass = 'weui-icon-success weui-icon_msg'
          break;
      }
      this.iconClass = iconClass
    })
  }
}
</script>