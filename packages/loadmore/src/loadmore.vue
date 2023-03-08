<template>
  <div
    :class="
      (line ? 'weui-loadmore_line' : '') + (dot ? ' weui-loadmore_dot' : '')
    "
    class="weui-loadmore"
  >
    <span class="weui-primary-loading" v-if="loading">
      <i class="weui-primary-loading__dot"></i>
    </span>
    <span class="weui-loadmore__tips">{{ tip }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "WeuiLoadmore",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  tip: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  line: {
    type: Boolean,
    default: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
});
</script>