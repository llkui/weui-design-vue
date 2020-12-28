## grid and grid-item

:::demo

```html
<template>
  <weui-grid>
    <weui-grid-item v-for="(count, index) in 9" :key="index" :icon="tabbar">
      Grid
    </weui-grid-item>
  </weui-grid>
</template>
<script>
  import tabbar from './../assets/icon_tabbar.png'
  export default {
    data() {
      return {
        tabbar: tabbar
      }
    }
  }
</script>

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| icon | 图标 | string | —      | —      |
