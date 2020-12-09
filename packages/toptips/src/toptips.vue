<template>
  <div :style="toptipsClass" class="weui-toptips weui-toptips_warn">
    {{ text }}
  </div>
</template>
<script>
export default {
  name: 'WeuiToptips',
  data() {
    return {
      text: null,
      toptipsClass: '',
    }
  },
  methods: {
    show: function (text, config) {
      this.text = text
      this.toptipsClass =
        'display: block; opacity: 0; transition: opacity 0.2s linear 0s;'
      setTimeout(() => {
        this.toptipsClass = 'display: block; opacity: 1;'
      }, 200)

      // 自动关闭
      const duration =
        config && config.duration !== undefined ? config.duration : 2000
      if (duration !== 0) {
        setTimeout(() => {
          this.hide()
        }, duration)
      }
    },
    hide: function () {
      setTimeout(() => {
        this.toptipsClass = 'display: none; opacity: 0;'
      }, 200)
    },
  },
}
</script>