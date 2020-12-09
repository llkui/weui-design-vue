<template>
  <div class="weui-cells_checkbox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WeuiCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: null,
    },
  }
};
</script>