<template>
  <div class="weui-cells__group weui-cells__group_form">
    <div class="weui-cells__title" v-if="title">{{ title }}</div>
    <div class="weui-cells weui-cells_form">
      <slot></slot>
    </div>
    <div class="weui-cells__tips" v-if="tips">
      <a class="weui-link" href="javascript:">{{ tips }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiFormGroup",
  props: {
    title: {
      type: String,
      default: null,
    },
    tips: {
      type: String,
      default: null,
    },
  },
};
</script>