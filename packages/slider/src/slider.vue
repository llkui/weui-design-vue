<template>
  <div class="weui-slider-box">
    <div class="weui-slider">
      <div class="weui-slider__inner" ref="sliderInner">
        <div class="weui-slider__track" ref="sliderTrack"></div>
        <div class="weui-slider__handler" ref="sliderHandler"></div>
      </div>
    </div>
    <div class="weui-slider-box__value" ref="sliderValue" v-if="showValue">{{curPercent}}</div>
  </div>
</template>
<script>
export default {
  name: 'WeuiSlider',
  data () {
    return {
      totalLen: 0,
      startLeft: 0,
      startX: 0,
      curPercent: this.percent > 100 ? 100 : this.percent < 0 ? 0 : this.percent
    }
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    percent: function (newVal) {
      this.curPercent = newVal
    },
    curPercent: function (newVal) {
      this.$emit('update:percent', newVal)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$refs.sliderTrack.style.width = this.curPercent + '%'
      this.$refs.sliderHandler.style.left = this.curPercent + '%'
      if (!this.disabled) {
        this.totalLen = this.$refs.sliderInner.offsetWidth
        this.addEventListeners()
      }
    })
  },
  methods: {
    addEventListeners: function () {
      const self = this;
      this.$refs.sliderHandler.addEventListener('touchstart', function (e) {
        self.startLeft = parseInt(self.$refs.sliderHandler.style.left) * self.totalLen / 100
        self.startX = e.changedTouches[0].clientX
      })
      this.$refs.sliderHandler.addEventListener('touchmove', function (e) {
        let dist = self.startLeft + e.changedTouches[0].clientX - self.startX
        dist = dist < 0 ? 0 : dist > self.totalLen ? self.totalLen : dist;
        self.curPercent = parseInt(dist / self.totalLen * 100)
        self.$refs.sliderTrack.style.width = self.curPercent + '%'
        self.$refs.sliderHandler.style.left = self.curPercent + '%'

        e.preventDefault()
      })
    }
  }
}
</script>