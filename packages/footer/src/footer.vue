<template>
  <div :class="fixed ? 'weui-footer_fixed-bottom' : ''" class="weui-footer">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "WeuiFooter",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});
</script>