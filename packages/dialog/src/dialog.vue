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
        <template v-if="useType == 'function'">
          <p v-html="content"></p>
        </template>
      </div>
      <div class="weui-dialog__ft">
        <a
          @click="cancel()"
          class="weui-dialog__btn weui-dialog__btn_default"
          href="javascript:"
          v-if="showCancel"
          >{{ cancelText }}</a
        >
        <a
          @click="ok()"
          class="weui-dialog__btn weui-dialog__btn_primary"
          href="javascript:"
          v-if="showOk"
          >{{ okText }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiDialog',
  data () {
    return {
      useType: 'component',
      content: null,
      onCancel: function () { },
      onOk: function () { }
    }
  },
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
      default: '提示'
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
      if (this.useType === 'component') {
        this.$emit('onCancel')
      } else {
        this.visible = false
        this.onCancel()
      }
    },
    ok: function () {
      if (this.useType === 'component') {
        this.$emit('onOk')
      } else {
        this.visible = false
        this.onOk()
      }
    },
    show: function (config) {
      this.useType = 'function'
      this.visible = true
      this.type = config.type ? config.type : 'ios'
      this.title = config.title ? config.title : '提示'
      this.content = config.content ? config.content : null
      this.cancelText = config.cancelText ? config.cancelText : '取消'
      this.okText = config.okText ? config.okText : '确定'
      this.showCancel = config.showCancel !== undefined ? config.showCancel : true
      this.showOk = config.showOk !== undefined ? config.showOk : true
      this.onCancel = config.onCancel ? config.onCancel : function () { }
      this.onOk = config.onOk ? config.onOk : function () { }
    }
  }
}
</script>