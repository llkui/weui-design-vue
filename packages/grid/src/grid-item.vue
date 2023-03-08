<template>
  <a class="weui-grid" href="javascript:">
    <div class="weui-grid__icon" v-if="icon">
      <img :src="icon" alt />
    </div>
    <p class="weui-grid__label">
      <slot></slot>
    </p>
  </a>
</template>
<script lang="ts">
export default {
  name: "WeuiGridItem",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
});
</script>