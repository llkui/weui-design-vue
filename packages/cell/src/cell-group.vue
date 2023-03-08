<template>
  <div class="weui-cells__title">{{ title }}</div>
  <div class="weui-cells">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "WeuiCellGroup",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
});
</script>