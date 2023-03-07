<template>
  <a :class="btnClass" @click="click($event)">
    <span
      class="weui-primary-loading weui-primary-loading_transparent"
      v-if="loading"
    >
      <i class="weui-primary-loading__dot"></i>
    </span>
    <img :src="icon" class="weui-btn_cell__icon" v-if="icon" />
    <slot></slot>
  </a>
</template>
<script lang="ts">
export default {
  name: "WeuiButton",
};
</script>
<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref, watch } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  inForm: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["click"]);

let btnClass = ref("");

watch(
  () => props.disabled,
  () => {
    getClass();
  }
);

onMounted(() => {
  nextTick(() => {
    getClass();
  });
});

const getClass = () => {
  let btnCls = "";
  if (props.type !== "text") {
    if (!props.block) {
      btnCls += "weui-btn";
      if (props.type) {
        btnCls += " weui-btn_" + props.type;
      }
      if (props.mini) {
        btnCls += " weui-btn_mini";
      }
      if (props.loading) {
        btnCls += " weui-btn_loading";
      }
      if (props.disabled) {
        btnCls += " weui-btn_disabled";
      }
      if (props.inForm) {
        btnCls += " weui-vcode-btn";
      }
    } else {
      btnCls += "weui-btn_cell";
      if (props.type) {
        btnCls += " weui-btn_cell-" + props.type;
      }
      if (props.mini) {
        btnCls += " weui-btn_mini";
      }
      if (props.loading) {
        btnCls += " weui-btn_loading";
      }
      if (props.disabled) {
        btnCls += " weui-btn_disabled";
      }
    }
  } else {
    // text为透明按钮，只显示里面的内容
    btnCls = "weui-btn_reset weui-btn_icon";
  }
  btnClass.value = btnCls;
};

const click = (e) => {
  if (!props.disabled) {
    emits("click", e);
  }
};
</script>
