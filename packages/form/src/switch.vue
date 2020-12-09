<template>
  <div @click="onClick" class="weui-cell weui-cell_active weui-cell_switch">
    <div class="weui-cell__bd">
      <slot></slot>
    </div>
    <div class="weui-cell__ft" v-if="!IE">
      <input :checked="value" class="weui-switch" type="checkbox" />
    </div>
    <div class="weui-cell__ft" v-if="IE">
      <label class="weui-switch-cp" for="switchCP">
        <input :checked="value" class="weui-switch-cp__input" type="checkbox" />
        <div class="weui-switch-cp__box"></div>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiSwitch",
  props: {
    IE: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick () {
      this.$emit('input', !this.value);
    }
  }
};
</script>