<template>
  <div class="weui-form-preview__item">
    <label class="weui-form-preview__label">{{ label }}</label>
    <span class="weui-form-preview__value">{{ value }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "WeuiPreviewItem",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
});
</script>