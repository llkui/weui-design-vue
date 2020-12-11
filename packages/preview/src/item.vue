<template>
  <div class="weui-form-preview__item">
    <label class="weui-form-preview__label">{{ label }}</label>
    <span class="weui-form-preview__value">{{ value }}</span>
  </div>
</template>
<script>
export default {
  name: 'WeuiPreviewItem',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
};
</script>