<template>
  <div class="weui-cells__title">{{ title }}</div>
</template>
<script>
export default {
  name: 'WeuiCellGroupTitle',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>