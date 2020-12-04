<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div @click="close('mask')" class="weui-mask weui-animate-fade-in"></div>
    <div class="weui-half-screen-dialog weui-picker weui-animate-slide-up">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button
            @click="close('icon')"
            class="weui-icon-btn weui-icon-btn_close weui-picker__btn"
          >关闭</button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">{{title}}</strong>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <div class="weui-picker__bd">
          <template v-for="(group, indexd) in groups">
            <div :key="indexd" class="weui-picker__group" ref="pickerBd">
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
      title: null,
      maskClosable: true,
      showClose: true,
      depth: 1,
      groups: [],
      options: [],
      // item高度
      itemH: 0,
      startY: [0],
      // 滑动方向
      direction: [0],
      // 实时旋转刻度
      dist: [0],
      // 起始旋转刻度
      curDist: [0],
      // 相对于起始点的实时偏差
      offset: [0],
      selectedIndex: [0],
      resolve: null
    };
  },
  methods: {
    initData: function () {
      if (this.$refs.pickerItem.length > 0) {
        // 获取item的高度
        this.itemH = this.$refs.pickerItem[0].offsetHeight
      }
    },
    initDepth: function (index) {
      setTimeout(() => {
        this.initPicker(index)
        this.addEventListeners(index)
        // 根据层级是否初始化完成
        if (index + 1 < this.depth) {
          this.groups.push(this.groups[index][this.selectedIndex[index]].children)
          this.initDepth(index + 1)
        }
      }, 0)
    },
    initPicker: function (index) {
      if (this.$refs.pickerItem.length > 0) {
        const dist = this.itemH * (2 - this.selectedIndex[index])
        this.$refs.pickerContent[index].style.transform = `translate3d(0px, ${dist}px, 0px)`
        this.curDist[index] = dist
      }
    },
    addEventListeners: function (index) {
      this.$refs.pickerBd[index].addEventListener('touchstart', (e) => this.touchstartListener(e, index))
      this.$refs.pickerBd[index].addEventListener('touchmove', (e) => this.touchmoveListener(e, index))
      this.$refs.pickerBd[index].addEventListener('touchend', () => this.touchendListener(index))
    },
    touchstartListener: function (e, index) {
      // 关闭动画
      this.$refs.pickerContent[index].style.transition = 'all 0s ease 0s'
      this.startY[index] = e.changedTouches[0].clientY
    },
    touchmoveListener: function (e, index) {
      const offset = e.changedTouches[0].clientY - this.startY[index]
      const dist = offset + this.curDist[index]
      this.$refs.pickerContent[index].style.transform = `translate3d(0px, ${dist}px, 0px)`
      this.offset[index] = offset
      this.dist[index] = dist
    },
    touchendListener: function (index) {
      // 打开动画
      this.$refs.pickerContent[index].style.transition = 'all 0.3s ease 0s'
      // 记录滑动方向（此方向为item滚动方向，与手指实际滑动方向相反）
      this.direction[index] = this.offset > 0 ? -1 : 1
      // 计算应该选中的index
      const offsetInteger = Math.round(this.offset[index] / this.itemH)
      /**
       * 往上滑动，实际手指向下滑动，所以要用 - 
       *  */

      if (this.selectedIndex[index] - offsetInteger < 0) {
        // 旋转刻度重置到0的位置
        this.dist[index] = this.curDist[index] + this.itemH * (this.selectedIndex[index] - 0)
        this.selectedIndex[index] = 0
      } else if (this.selectedIndex[index] - offsetInteger > this.groups[index].length - 1) {
        // 旋转刻度重置到最后一个的位置
        this.dist[index] = this.curDist[index] + this.itemH * (this.selectedIndex[index] - (this.groups[index].length - 1))
        this.selectedIndex[index] = this.groups[index].length - 1
      } else {
        // 旋转刻度重置到selectedIndex的位置
        this.dist[index] = this.curDist[index] + this.itemH * offsetInteger
        this.selectedIndex[index] -= offsetInteger
      }

      // 判断选中item是否为item
      this.dist[index] = this.selectedIsDisabled(index)

      this.$refs.pickerContent[index].style.transform = `translate3d(0px, ${this.dist[index]}px, 0px)`
      this.curDist[index] = this.dist[index]

      // 滑动第一个group时，第二个group数组要跟着联动
      if (index + 1 < this.depth) {
        this.groups.splice(index + 1, 1, this.groups[index][this.selectedIndex[index]].children)
        // 将下一个group滚动到先前选定的，若长度超过下一个group长度，则默认选中第一个
        if (this.selectedIndex[index + 1] >= this.groups[index + 1].length) {
          this.selectedIndex[index + 1] = 0
        }
        setTimeout(() => {
          this.initPicker(index + 1)
        }, 0)
      }

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
    selectedIsDisabled: function (index) {
      /**
       * 滑动之后，若选择的是disabled，则根据滑动方向，选择向上或者上下一个，
       * 若是往上滑动，则index + 1，否则index - 1
       * 若所有的都disabled，则选择-1或者this.options.length所属item的偏移量位置
       */
      if (this.selectedIndex[index] >= 0 && this.selectedIndex[index] < this.groups[index].length) {
        if (this.groups[index][this.selectedIndex[index]].disabled) {
          this.dist[index] = this.dist[index] + this.itemH * this.direction[index]
          this.selectedIndex[index] = this.selectedIndex[index] - this.direction[index]
          this.selectedIsDisabled(index)
        }
      }
      return this.dist[index]
    },
    close: function (type) {
      if (type === 'icon' || this.maskClosable) {
        this.visible = false
      }
    },
    confirm: function () {
      this.visible = false
      const selected = [];
      for (let i = 0; i < this.depth; i++) {
        if (this.selectedIndex[i] >= 0 && this.selectedIndex[i] < this.groups[i].length) {
          selected.push(this.groups[i][this.selectedIndex[i]])
        } else {
          selected.push(null)
        }
      }
      this.resolve(selected)
    },
    show: function (config) {
      this.visible = true
      this.title = config.title ? config.title : null
      this.maskClosable = config.maskClosable ? config.maskClosable : true
      this.showClose = config.showClose ? config.showClose : true
      this.groups = [];
      this.depth = config.depth ? config.depth : 1
      this.groups.push(config.options)
      this.selectedIndex = config.default ? config.default : [0]

      for (let i = 0; i < this.depth; i++) {
        this.startY = new Array(this.depth).fill(0)
        this.direction = new Array(this.depth).fill(0)
        this.dist = new Array(this.depth).fill(0)
        this.curDist = new Array(this.depth).fill(0)
        this.offset = new Array(this.depth).fill(0)
      }

      // 获取每一个item高度
      setTimeout(() => {
        this.initData()
      }, 0)

      // 根据数据层级初始化数据（每一层每一层初始化）
      this.initDepth(0)

      return new Promise((resolve) => {
        this.resolve = resolve
      })
    },
  },
};
</script>