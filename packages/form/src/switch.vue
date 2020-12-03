<template>
  <div class="weui-cell weui-cell_active weui-cell_switch" @click="onClick">
    <div class="weui-cell__bd"><slot></slot></div>
    <div v-if="!IE" class="weui-cell__ft">
      <input class="weui-switch" type="checkbox" :id="id" :checked="value"/>
    </div>
    <div v-if="IE" class="weui-cell__ft">
      <label for="switchCP" class="weui-switch-cp">
        <input
          :id="id"
          class="weui-switch-cp__input"
          type="checkbox"
          :checked="value"
        />
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
    id: {
      type: String,
      default: null,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('change', !this.value);
    }
  }
};
</script>