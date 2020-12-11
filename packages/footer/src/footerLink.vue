<template>
  <a :href="href" @click="click()" class="weui-footer__link">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'WeuiFooterLink',
  props: {
    href: {
      type: String
    }
  },
  methods: {
    click: function () {
      this.$emit('onClick')
    }
  }
}
</script>