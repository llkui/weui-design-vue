<template>
  <div class="weui-cells_radio">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WeuiRadioGroup",
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
};
</script>