<template>
  <a :href="href" class="weui-footer__link">
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
  }
}
</script>