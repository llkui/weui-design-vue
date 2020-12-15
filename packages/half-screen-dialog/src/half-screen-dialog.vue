<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div @click="close()" class="weui-mask"></div>
    <div class="weui-half-screen-dialog weui-half-screen-dialog_show" v-if="type == 'custom'">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button @click="close()" class="weui-icon-btn" v-if="showClose">
            关闭
            <i class="weui-icon-close-thin"></i>
          </button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">{{title}}</strong>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <slot></slot>
      </div>
    </div>
    <div class="weui-half-screen-dialog weui-half-screen-dialog_show" v-else>
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button @click="back()" class="weui-icon-btn" v-if="showBack">
            返回
            <i class="weui-icon-back-arrow-thin"></i>
          </button>
          <button @click="close()" class="weui-icon-btn" v-if="showClose && !showBack">
            关闭
            <i class="weui-icon-close-thin"></i>
          </button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">{{title}}</strong>
          <span class="weui-half-screen-dialog__subtitle">{{subtitle}}</span>
        </div>
        <div class="weui-half-screen-dialog__hd__side">
          <button @click="more()" class="weui-icon-btn" v-if="showMore">
            更多
            <i class="weui-icon-more"></i>
          </button>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <p class="weui-half-screen-dialog__desc">{{desc}}</p>
        <p class="weui-half-screen-dialog__tips">{{tips}}</p>
      </div>
      <div class="weui-half-screen-dialog__ft">
        <a
          @click="onCancel()"
          class="weui-btn weui-btn_default"
          href="javascript:"
          v-if="showCancel"
        >{{cancelText}}</a>
        <a
          @click="onOk()"
          class="weui-btn weui-btn_primary"
          href="javascript:"
          v-if="showOk"
        >{{okText}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiHalfScreenDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'custom'
    },
    title: {
      type: String,
      default: null
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showMore: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    tips: {
      type: String,
      default: null
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showOk: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    close: function () {
      if (this.maskClosable) {
        this.$emit('onClose')
      }
    },
    back: function () {
      this.$emit('onBack')
    },
    more: function () {
      this.$emit('onMore')
    },
    onCancel: function () {
      this.$emit('onCancel')
    },
    onOk: function () {
      this.$emit('onOk')
    }
  }
}
</script>