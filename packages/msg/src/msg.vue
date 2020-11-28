<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area">
      <i v-if="type == 'success'" class="weui-icon-success weui-icon_msg"></i>
      <i v-else-if="type == 'warn'" class="weui-icon-warn weui-icon_msg"></i>
    </div>
    <div class="weui-msg__text-area">
      <h2 v-if="title" class="weui-msg__title">
        {{ title }}
      </h2>
      <p class="weui-msg__desc">
        <template v-if="desc">{{ desc }}</template>
        <slot v-if="!desc" name="desc"></slot>
      </p>
      <p class="weui-msg__desc-primary">
        <template v-if="descPrimary">{{ descPrimary }}</template>
        <slot v-if="!descPrimary" name="descPrimary"></slot>
      </p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <slot name="btn"></slot>
      </p>
    </div>
    <div class="weui-msg__tips-area">
      <p class="weui-msg__tips">
        <template v-if="tips">{{ tips }}</template>
        <slot v-if="!tips" name="tips"></slot>
      </p>
    </div>
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <slot name="footerLinks"></slot>
        </p>
        <p class="weui-footer__text">{{ footerText }}</p>
      </div>
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
    },
    footerText: {
      type: String,
      default: null,
    },
  },
  methods: {
    clickBtn: function () {
      this.$emit('onBtn', true)
    },
  },
}
</script>