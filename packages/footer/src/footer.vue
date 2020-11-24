<template>
  <div :class="fixed ? 'weui-footer_fixed-bottom' : ''" class="weui-footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WeuiFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>