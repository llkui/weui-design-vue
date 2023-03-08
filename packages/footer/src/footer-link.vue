<template>
  <a :href="href" @click="click()" class="weui-footer__link">
    <slot></slot>
  </a>
</template>
<script lang="ts">
export default {
  name: "WeuiFooterLink",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  href: {
    type: String,
  },
});

const emits = defineEmits(["onClick"]);

const click = () => {
  emits("onClick");
};
</script>