<template>
  <div :class="selectClass">
    <div @click="clickHeader()" class="weui-cell__hd" v-if="showHeader">
      <label class="weui-label" v-if="label">{{ label }}</label>
      <slot name="header" v-if="!label"></slot>
    </div>
    <div @click="clickBody()" class="weui-cell__bd">
      <template v-if="body">{{ body }}</template>
      <slot name="body" v-if="!body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiSelectGroup',
  data () {
    return {
      selectClass: ''
    }
  },
  props: {
    label: {
      type: String,
      default: null
    },
    body: {
      type: String,
      default: null
    },
    placement: {
      type: String,
      default: 'before'
    },
    isPicker: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let selectClass = 'weui-cell weui-cell_active'
      if (this.isPicker) {
        selectClass += ' weui-cell_access'
      }
      selectClass += ' weui-cell_select'
      if (this.placement) {
        selectClass += ' weui-cell_select-' + this.placement
      }
      this.selectClass = selectClass
    })
  },
  methods: {
    clickHeader: function () {
      this.$emit('clickHeader', true)
    },
    clickBody: function () {
      this.$emit('clickBody', true)
    }
  }
}
</script>