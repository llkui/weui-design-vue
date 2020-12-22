<template>
  <a
    :class="'weui-form-preview__btn weui-form-preview__btn_' + type"
    @click="click()"
    href="javascript:"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'WeuiPreviewButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    click: function () {
      this.$emit('click')
    }
  }
}
</script>