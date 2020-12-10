<template>
  <div :class="cellClass" @click="clickLink()">
    <div class="weui-cell__hd">
      <img :src="icon" alt style="width: 20px; margin-right: 16px; display: block" v-if="icon" />
      <template v-if="!icon">
        <slot name="label"></slot>
      </template>
    </div>
    <div class="weui-cell__bd" ref="body">
      <template v-if="!isSwipe">
        <template v-if="title">
          <p>{{title}}</p>
        </template>
        <template v-if="!title">
          <slot name="title"></slot>
        </template>
      </template>
      <div class="weui-cell" v-if="isSwipe">
        <div class="weui-cell__bd">
          <p>{{ title }}</p>
        </div>
        <div class="weui-cell__ft">{{ value }}</div>
      </div>
    </div>
    <div class="weui-cell__ft">
      <template v-if="!isSwipe">
        <template v-if="value">{{value}}</template>
        <template v-if="!value">
          <slot name="value"></slot>
        </template>
      </template>
      <a
        @click="clickBtn()"
        class="weui-swiped-btn weui-swiped-btn_warn"
        href="javascript:"
        ref="btn"
        v-if="isSwipe"
      >{{swipeText}}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiCell',
  data () {
    return {
      cellClass: ''
    }
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isSwipe: {
      type: Boolean,
      default: false,
    },
    swipeText: {
      type: String,
      default: '删除'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getClass()
      this.getSwipe()
    })
  },
  methods: {
    getClass: function () {
      let cellClass = 'weui-cell'
      if (this.isSwipe) {
        cellClass += ' weui-cell_swiped'
      }
      if (this.isActive) {
        cellClass += ' weui-cell_active'
      }
      if (this.isLink) {
        cellClass += ' weui-cell_access'
      }
      this.cellClass = cellClass
    },
    getSwipe: function () {
      if (this.isSwipe) {
        setTimeout(() => {
          const width = this.$refs.btn.offsetWidth
          this.$refs.body.style.transform = `translateX(-${width}px)`
        }, 0)
      }
    },
    clickLink: function () {
      this.$emit('click');
    },
    clickBtn: function () {
      this.$emit('clickBtn')
    }
  }
};
</script>