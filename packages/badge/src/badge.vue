<template>
  <span
    :class="dot ? 'weui-badge_dot' : ''"
    :style="styleSet"
    class="weui-badge"
  >
    <slot></slot>
  </span>
</template>
<script lang="ts">
export default {
  name: "WeuiBadge",
  props: {
    dot: {
      type: Boolean,
      default: false,
    },
    styleSet: {
      type: String,
      default: null,
    },
  },
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  dot: {
    type: Boolean,
    default: false,
  },
  styleSet: {
    type: String,
    default: null,
  },
});
</script>