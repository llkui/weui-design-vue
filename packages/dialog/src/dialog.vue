<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div class="weui-mask"></div>
    <div
      :class="{ 'weui-skin_android': type == 'android' }"
      class="weui-dialog"
    >
      <div class="weui-dialog__hd" v-if="title">
        <strong class="weui-dialog__title">{{ title }}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot></slot>
      </div>
      <div class="weui-dialog__ft">
        <a
          @click="cancel()"
          class="weui-dialog__btn weui-dialog__btn_default"
          href="javascript:"
          v-if="cancelText || showCancel"
          >{{ cancelText }}</a
        >
        <a
          @click="ok()"
          class="weui-dialog__btn weui-dialog__btn_primary"
          href="javascript:"
          v-if="okText || showOk"
          >{{ okText }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'ios'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showOk: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '弹窗标题'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    okText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    cancel: function () {
      this.$emit('onCancel')
    },
    ok: function () {
      this.$emit('onOk')
    }
  }
}
</script>