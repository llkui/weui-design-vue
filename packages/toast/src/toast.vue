<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div class="weui-mask_transparent"></div>
    <div
      :class="
        (type == 'info' ? 'weui-toast_text' : '') +
        (more ? ' weui-toast_text-more' : '')
      "
      class="weui-toast"
    >
      <i
        class="weui-icon-success-no-circle weui-icon_toast"
        v-if="type == 'success'"
      ></i>
      <i class="weui-icon-warn weui-icon_toast" v-else-if="type == 'warn'"></i>
      <span
        class="weui-primary-loading weui-primary-loading_transparent weui-icon_toast"
        v-else-if="type == 'loading'"
      >
        <span class="weui-primary-loading__dot"></span>
      </span>
      <p class="weui-toast__content">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiToast',
  data () {
    return {
      text: '',
      type: '',
      visible: false,
      more: false,
      callback: function () { }
    }
  },
  methods: {
    success: function (text, config) {
      this.type = 'success'
      this.show(text, config)
    },
    warn: function (text, config) {
      this.type = 'warn'
      this.show(text, config)
    },
    loading: function (text, config) {
      this.type = 'loading'
      this.show(text, config)
    },
    info: function (text, config) {
      this.type = 'info'
      this.show(text, config)
    },
    show: function (text, config) {
      this.text = text
      this.visible = true
      const duration =
        config && config.duration !== undefined ? config.duration : 2000
      this.more =
        config && config.more !== undefined ? config.more : false
      this.callback = config && config.callback ? config.callback : function () { }
      if (duration !== 0) {
        setTimeout(() => {
          this.visible = false
          this.callback()
        }, duration)
      }
    },
    hide: function () {
      this.visible = false
    },
  },
}
</script>