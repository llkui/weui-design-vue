<template>
  <span :class="dot ? 'weui-badge weui-badge_dot' : 'weui-badge'" :style="style"><slot></slot></span>
</template>
<script>
export default {
  name: 'WeuiBadge',
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    style: {
      type: String,
      default: null
    }
  }
}
</script>