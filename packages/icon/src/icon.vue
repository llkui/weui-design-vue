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
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let iconClass = ''
      switch (this.type) {
        case 'warn-primary':
          iconClass = 'weui-icon-warn'
          break
        default:
          iconClass = 'weui-icon-' + this.type
          break
      }
      if (!this.mini) {
        switch (this.type) {
          case 'warn-primary':
            iconClass += ' weui-icon_msg-primary'
            break
          default:
            iconClass += ' weui-icon_msg'
            break
        }
      }
      this.iconClass = iconClass
    })
  }
}
</script>