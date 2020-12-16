<template>
  <div class="weui-form">
    <div class="weui-form__text-area" v-if="title || desc">
      <h2 class="weui-form__title">{{ title }}</h2>
      <div class="weui-form__desc">{{ desc }}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WeuiForm",
  props: {
    title: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
      default: null,
    },
  },
};
</script>