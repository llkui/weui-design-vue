<template>
  <div class="weui-cells_checkbox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WeuiCheckboxGroup",
  props: {
    value: {},
    name: {
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