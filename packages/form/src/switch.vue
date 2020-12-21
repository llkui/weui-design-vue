<template>
  <div class="weui-cell weui-cell_active weui-cell_switch">
    <div class="weui-cell__bd">
      {{ label }}
    </div>
    <div class="weui-cell__ft" v-if="!IE">
      <input
        :checked="value"
        class="weui-switch"
        type="checkbox"
        @click="onClick()"
      />
    </div>
    <div class="weui-cell__ft" v-if="IE">
      <label class="weui-switch-cp" for="switchCP">
        <input :checked="value" class="weui-switch-cp__input" type="checkbox" />
        <div class="weui-switch-cp__box" @click="onClick()"></div>
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
    label: String
  },
  methods: {
    onClick () {
      this.$emit('input', !this.value);
    }
  }
};
</script>