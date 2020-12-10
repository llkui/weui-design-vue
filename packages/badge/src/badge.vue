<template>
  <span :class="dot ? 'weui-badge_dot' : ''" :style="styleSet" class="weui-badge">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'WeuiBadge',
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    styleSet: {
      type: String,
      default: null
    }
  }
}
</script>