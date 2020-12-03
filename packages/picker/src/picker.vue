<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div class="weui-mask weui-animate-fade-in"></div>
    <div class="weui-half-screen-dialog weui-picker weui-animate-slide-up">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button class="weui-icon-btn weui-icon-btn_close weui-picker__btn">关闭</button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">单列选择器</strong>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <div class="weui-picker__bd">
          <div class="weui-picker__group" ref="pickerBd">
            <div class="weui-picker__mask"></div>
            <div class="weui-picker__indicator" ref="pickerIndicator"></div>
            <div class="weui-picker__content" ref="pickerContent">
              <template v-for="(item, index) in options">
                <div
                  :class="item.disabled ? 'weui-picker__item_disabled' : ''"
                  :key="index"
                  class="weui-picker__item"
                  ref="pickerItem"
                >{{item.label}}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-half-screen-dialog__ft">
        <a
          @click="confirm()"
          class="weui-btn weui-btn_primary weui-picker__btn"
          data-action="select"
          href="javascript:;"
        >确定</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "WeuiPicker",
  data () {
    return {
      visible: false,
      options: [],
      // item高度
      itemH: 0,
      startY: 0,
      // 滑动方向
      direction: 0,
      // 实时旋转刻度
      dist: 0,
      // 起始旋转刻度
      curDist: 0,
      // 相对于起始点的实时偏差
      offset: 0,
      selectedIndex: 0,
      resolve: null
    };
  },
  methods: {
    initPicker: function () {
      if (this.$refs.pickerItem.length > 0) {
        // 获取item的高度
        this.itemH = this.$refs.pickerItem[0].offsetHeight
        const dist = this.itemH * (2 - this.selectedIndex)
        this.$refs.pickerContent.style.transform = `translate3d(0px, ${dist}px, 0px)`
        this.curDist = dist
      }
    },
    addEventListeners: function () {
      this.$refs.pickerBd.addEventListener('touchstart', this.touchstartListener)
      this.$refs.pickerBd.addEventListener('touchmove', this.touchmoveListener)
      this.$refs.pickerBd.addEventListener('touchend', this.touchendListener)
    },
    touchstartListener: function (e) {
      // 关闭动画
      this.$refs.pickerContent.style.transition = 'all 0s ease 0s'
      this.startY = e.changedTouches[0].clientY
    },
    touchmoveListener: function (e) {
      const offset = e.changedTouches[0].clientY - this.startY
      const dist = offset + this.curDist
      this.$refs.pickerContent.style.transform = `translate3d(0px, ${dist}px, 0px)`
      this.offset = offset
      this.dist = dist
    },
    touchendListener: function () {
      // 打开动画
      this.$refs.pickerContent.style.transition = 'all 0.3s ease 0s'
      // 记录滑动方向（此方向为item滚动方向，与手指实际滑动方向相反）
      this.direction = this.offset > 0 ? -1 : 1
      // 计算应该选中的index
      const offsetInteger = Math.round(this.offset / this.itemH)
      /**
       * 往上滑动，实际手指向下滑动，所以要用 - 
       *  */
      if (this.selectedIndex - offsetInteger < 0) {
        // 旋转刻度重置到0的位置
        this.dist = this.curDist + this.itemH * (this.selectedIndex - 0)
        this.selectedIndex = 0
      } else if (this.selectedIndex - offsetInteger > this.options.length - 1) {
        // 旋转刻度重置到最后一个的位置
        this.dist = this.curDist + this.itemH * (this.selectedIndex - (this.options.length - 1))
        this.selectedIndex = this.options.length - 1
      } else {
        // 旋转刻度重置到selectedIndex的位置
        this.dist = this.curDist + this.itemH * offsetInteger
        this.selectedIndex -= offsetInteger
      }

      // 判断选中item是否为item
      this.dist = this.selectedIsDisabled()

      this.$refs.pickerContent.style.transform = `translate3d(0px, ${this.dist}px, 0px)`
      this.curDist = this.dist

      /**
       * 待完善
       * 
       * 
       * 
       * 日期选项
       * 
       * 省市选项
       * 
       */
    },
    selectedIsDisabled: function () {
      /**
       * 滑动之后，若选择的是disabled，则根据滑动方向，选择向上或者上下一个，
       * 若是往上滑动，则index + 1，否则index - 1
       * 若所有的都disabled，则选择-1或者this.options.length所属item的偏移量位置
       */
      if (this.selectedIndex >= 0 && this.selectedIndex < this.options.length) {
        if (this.options[this.selectedIndex].disabled) {
          this.dist = this.dist + this.itemH * this.direction
          this.selectedIndex = this.selectedIndex - this.direction
          this.selectedIsDisabled()
        }
      }
      return this.dist
    },
    confirm: function () {
      this.visible = false
      if (this.selectedIndex >= 0 && this.selectedIndex < this.options.length) {
        this.resolve(this.options[this.selectedIndex])
      } else {
        this.resolve(null)
      }
    },
    show: function (config) {
      this.visible = true
      this.options = config.options
      this.selectedIndex = config.default ? config.default : 0

      setTimeout(() => {
        this.initPicker()
        this.addEventListeners()
      }, 0)

      return new Promise((resolve) => {
        this.resolve = resolve
      })
    }
  },
};
</script>