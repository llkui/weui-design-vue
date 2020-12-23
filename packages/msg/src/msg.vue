<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area" v-if="type">
      <i class="weui-icon-success weui-icon_msg" v-if="type == 'success'"></i>
      <i class="weui-icon-warn weui-icon_msg" v-else-if="type == 'warn'"></i>
    </div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title" v-if="title">{{ title }}</h2>
      <p class="weui-msg__desc">
        <template v-if="desc">{{ desc }}</template>
        <slot name="desc" v-if="!desc"></slot>
      </p>
      <p class="weui-msg__desc-primary">
        <template v-if="descPrimary">{{ descPrimary }}</template>
        <slot name="descPrimary" v-if="!descPrimary"></slot>
      </p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <slot name="btn"></slot>
      </p>
    </div>
    <div class="weui-msg__tips-area" v-if="$slots.tips || tips">
      <p class="weui-msg__tips">
        <template v-if="tips">{{ tips }}</template>
        <slot name="tips" v-if="!tips"></slot>
      </p>
    </div>
    <div class="weui-msg__extra-area" v-if="$slots.extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiMsg',
  props: {
    type: {
      type: String,
      default: 'success',
    },
    title: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
      default: null,
    },
    descPrimary: {
      type: String,
      default: null,
    },
    tips: {
      type: String,
      default: null,
    }
  },
  methods: {
    clickBtn: function () {
      this.$emit('onBtn', true)
    },
  },
}
</script>