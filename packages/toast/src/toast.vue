<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div class="weui-mask_transparent"></div>
    <div :class="type == 'info' ? 'weui-toast_text' : ''" class="weui-toast">
      <i class="weui-icon-success-no-circle weui-icon_toast" v-if="type == 'success'"></i>
      <i class="weui-icon-warn weui-icon_toast" v-else-if="type == 'warn'"></i>
      <span
        class="weui-primary-loading weui-primary-loading_transparent weui-icon_toast"
        v-else-if="type == 'loading'"
      >
        <span class="weui-primary-loading__dot"></span>
      </span>
      <p class="weui-toast__content">{{text}}</p>
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
      visible: false
    }
  },
  methods: {
    success: function (value) {
      this.type = 'success'
      this.show(value)
    },
    warn: function (value) {
      this.type = 'warn'
      this.show(value)
    },
    loading: function (value) {
      this.type = 'loading'
      this.show(value)
    },
    info: function (value) {
      this.type = 'info'
      this.show(value)
    },
    show: function (value) {
      this.text = value
      this.visible = true
      setTimeout(() => {
        this.visible = false
      }, 3000);
    }
  }
}
</script>