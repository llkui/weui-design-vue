<template>
  <a
    :class="'weui-form-preview__btn weui-form-preview__btn_' + type"
    @click="click()"
    href="javascript:"
  >
    <slot></slot>
  </a>
</template>
<script lang="ts">
export default {
  name: "WeuiPreviewButton",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});

const emits = defineEmits(["click"]);

const click = () => {
  emits("click");
};
</script>