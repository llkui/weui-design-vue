<template>
  <span :class="loadingClass">
    <span class="weui-primary-loading__dot" v-if="type"></span>
  </span>
</template>
<script lang="ts">
export default {
  name: "WeuiLoading",
};
</script>
<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: null,
  },
});

let loadingClass = ref("");

onMounted(() => {
  nextTick(() => {
    let loadingCls = "";
    switch (props.type) {
      case "primary":
        loadingCls = "weui-primary-loading";
        break;
      case "brand":
        loadingCls = "weui-primary-loading weui-primary-loading_brand";
        break;
      case "transparent":
        loadingCls = "weui-primary-loading weui-primary-loading_transparent";
        break;
      default:
        loadingCls = "weui-loading";
        break;
    }
    loadingClass.value = loadingCls;
  });
});
</script>