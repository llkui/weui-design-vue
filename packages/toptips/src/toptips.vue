<template>
  <div :style="toptipsClass" class="weui-toptips weui-toptips_warn">{{text}}</div>
</template>
<script>
export default {
  name: 'WeuiToptips',
  data () {
    return {
      text: null,
      toptipsClass: ''
    }
  },
  methods: {
    show (value) {
      this.text = value
      this.toptipsClass = 'display: block; opacity: 0; transition: opacity 0.2s linear 0s;'
      setTimeout(() => {
        this.toptipsClass = 'display: block; opacity: 1;'
      }, 200)
    },
    hide () {
      setTimeout(() => {
        this.toptipsClass = 'display: none; opacity: 0;'
      }, 200)
    }
  }
}
</script>