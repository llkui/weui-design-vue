<template>
  <div class="weui-picker__group" ref="pickerBd">
    <div class="weui-picker__mask"></div>
    <div class="weui-picker__indicator" ref="pickerIndicator"></div>
    <div class="weui-picker__content" ref="pickerContent">
      <template v-for="(item, indexOptions) in group">
        <div
          :class="item.disabled ? 'weui-picker__item_disabled' : ''"
          :key="indexOptions"
          class="weui-picker__item"
          ref="pickerItem"
        >{{item.label}}</div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PickerItem',
  data () {
    return {
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
      curSelectedIndex: this.selectedIndex
    }
  },
  props: ['group', 'index', 'selectedIndex'],
  watch: {
    group: function () {
      this.initPicker(this.selectedIndex)
      this.initNextGroup(this.selectedIndex)
    },
    selectedIndex: function (newVal) {
      this.curSelectedIndex = newVal
    },
    curSelectedIndex: function (newVal) {
      this.$emit('update:selectedIndex', newVal)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initData()
      this.initPicker(this.curSelectedIndex)
      this.addEventListeners()
    })
  },
  methods: {
    initData: function () {
      // if (this.$refs.pickerItem.length > 0) {
      //   // 获取item的高度
      //   this.itemH = this.$refs.pickerItem[0].offsetHeight
      // }
      this.itemH = 48
    },
    initPicker: function (index) {
      if (this.$refs.pickerItem.length > 0) {
        const dist = this.itemH * (2 - index)
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
      if (this.curSelectedIndex - offsetInteger < 0) {
        // 旋转刻度重置到0的位置
        this.dist = this.curDist + this.itemH * (this.curSelectedIndex - 0)
        this.curSelectedIndex = 0
      } else if (this.curSelectedIndex - offsetInteger > this.group.length - 1) {
        // 旋转刻度重置到最后一个的位置
        this.dist = this.curDist + this.itemH * (this.curSelectedIndex - (this.group.length - 1))
        this.curSelectedIndex = this.group.length - 1
      } else {
        // 旋转刻度重置到curSelectedIndex的位置
        this.dist = this.curDist + this.itemH * offsetInteger
        this.curSelectedIndex -= offsetInteger
      }

      // 判断选中item是否为item
      this.dist = this.selectedIsDisabled()

      this.$refs.pickerContent.style.transform = `translate3d(0px, ${this.dist}px, 0px)`
      this.curDist = this.dist

      // 滑动第一个group时，第二个group数组要跟着联动
      this.initNextGroup(this.curSelectedIndex)
    },
    selectedIsDisabled: function () {
      /**
       * 滑动之后，若选择的是disabled，则根据滑动方向，选择向上或者上下一个，
       * 若是往上滑动，则index + 1，否则index - 1
       * 若所有的都disabled，则选择-1或者this.options.length所属item的偏移量位置
       */
      if (this.curSelectedIndex >= 0 && this.curSelectedIndex < this.group.length) {
        if (this.group[this.curSelectedIndex].disabled) {
          this.dist = this.dist + this.itemH * this.direction
          this.curSelectedIndex = this.curSelectedIndex - this.direction
          this.selectedIsDisabled()
        }
      }
      return this.dist
    },
    initNextGroup: function (index) {
      if (this.index + 1 < this.$parent.depth) {
        // 将下一个group滚动到先前选定的，若长度超过下一个group长度，则默认选中第一个
        const newGroup = this.$parent.groups[this.index][index].children
        if (this.$parent.selectedIndex[this.index + 1] >= newGroup.length) {
          this.$parent.selectedIndex[this.index + 1] = 0
        }
        this.$parent.groups.splice(this.index + 1, 1, newGroup)
      }
    }
  }
}
</script>