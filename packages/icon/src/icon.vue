<template>
  <i :class="iconClass"></i>
</template>
<script lang="ts">
export default {
  name: "WeuiIcon",
};
</script>
<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
  mini: {
    type: Boolean,
    default: false,
  },
});

let iconClass = ref("");

onMounted(() => {
  nextTick(() => {
    let iconCls = "";
    switch (props.type) {
      case "warn-primary":
        iconCls = "weui-icon-warn";
        break;
      default:
        iconCls = "weui-icon-" + props.type;
        break;
    }
    if (!props.mini) {
      switch (props.type) {
        case "warn-primary":
          iconCls += " weui-icon_msg-primary";
          break;
        default:
          iconCls += " weui-icon_msg";
          break;
      }
    }
    iconClass.value = iconCls;
  });
});
</script>