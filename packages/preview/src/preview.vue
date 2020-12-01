<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <div class="weui-form-preview__item">
        <label class="weui-form-preview__label"> {{ label }}</label>
        <em class="weui-form-preview__value">{{ value }}</em>
      </div>
    </div>
    <div class="weui-form-preview__bd">
      <slot></slot>
    </div>
    <div class="weui-form-preview__ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiPreview", // 注意这个name是必须的
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
      default: "辅助操作",
    },
    okText: {
      type: String,
      default: "操作",
    },
  },
};
</script>