# Grid 九宫格

## grid and grid-item

<weui-grid>
  <weui-grid-item v-for="(count, index) in 9" :key="index" :icon="tabbar">
    Grid
  </weui-grid-item>
</weui-grid>

<script setup lang="ts">
const tabbar = "/icon_tabbar.png"
</script>

:::details
```html
<weui-grid>
  <weui-grid-item v-for="(count, index) in 9" :key="index" :icon="tabbar">
    Grid
  </weui-grid-item>
</weui-grid>

<script setup lang="ts">
const tabbar = "/icon_tabbar.png"
</script>
```
:::

## Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| icon | 图标 | string | —      | —      |
