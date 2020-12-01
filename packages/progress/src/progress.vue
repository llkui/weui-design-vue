<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar" ref="progress"></div>
    </div>
    <a @click="onCancel()" class="weui-progress__opr" href="javascript:" v-if="showCancel">
      <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: 'WeuiProgress',
  data () {
    return {
      curPercent: this.percent > 100 ? 100 : this.percent < 0 ? 0 : this.percent
    }
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    showCancel: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    percent: function (newVal) {
      this.curPercent = newVal
      this.$refs.progress.style.width = this.curPercent + '%'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$refs.progress.style.width = this.curPercent + '%'
    })
  },
  methods: {
    onCancel: function () {
      this.$emit('onCancel', true)
    }
  }
}
</script>>