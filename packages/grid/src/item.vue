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
  name: 'WeuiGridItem', // 注意这个name是必须的
  props: {
    icon: {
      type: String,
      default: null
    },
  },
}
</script>