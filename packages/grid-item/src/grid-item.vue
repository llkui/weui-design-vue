<template>
  <a class="weui-grid" href="javascript:">
    <div class="weui-grid__icon" v-if="icon">
      <img :src="icon" alt />
    </div>
    <p class="weui-grid__label">
      <slot></slot>
    </p>
  </a>
</template>
<script>
export default {
  name: 'WeuiGridItem',
  props: {
    icon: {
      type: String,
      default: null
    },
  },
}
</script>