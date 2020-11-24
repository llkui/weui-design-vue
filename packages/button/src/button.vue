<template>
  <a :class="btnClass">
    <span class="weui-primary-loading weui-primary-loading_transparent" v-if="loading">
      <i class="weui-primary-loading__dot"></i>
    </span>
    <img :src="icon" class="weui-btn_cell__icon" v-if="icon" />
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'WeuiButton', // 注意这个name是必须的
  data () {
    return {
      btnClass: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let btnClass = '';
      if (!this.block) {
        btnClass += 'weui-btn'
        if (this.type) {
          btnClass += ' weui-btn_' + this.type
        }
        if (this.mini) {
          btnClass += ' weui-btn_mini'
        }
        if (this.loading) {
          btnClass += ' weui-btn_loading'
        }
        if (this.disabled) {
          btnClass += ' weui-btn_disabled'
        }
      } else {
        btnClass += 'weui-btn_cell'
        if (this.type) {
          btnClass += ' weui-btn_cell-' + this.type
        }
        if (this.mini) {
          btnClass += ' weui-btn_mini'
        }
        if (this.loading) {
          btnClass += ' weui-btn_loading'
        }
        if (this.disabled) {
          btnClass += ' weui-btn_disabled'
        }
      }
      this.btnClass = btnClass
    })
  }
}
</script>