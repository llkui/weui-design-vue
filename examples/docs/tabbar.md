## tabbar

:::demo

```html
<template>
  <weui-tabbar :selectedIndex.sync="selectedIndex">
    <weui-tabbar-item :icon="tabbar" label="微信" :count="8"></weui-tabbar-item>
    <weui-tabbar-item :icon="tabbar" label="通讯录"></weui-tabbar-item>
    <weui-tabbar-item :icon="tabbar" label="发现" dot></weui-tabbar-item>
    <weui-tabbar-item :icon="tabbar" label="我"></weui-tabbar-item>
  </weui-tabbar>
</template>
<script>
  import tabbar from '../assets/icon_tabbar.png'
  export default {
    data() {
      return {
        tabbar: tabbar,
        selectedIndex: 1
      }
    }
  }
</script>
```

:::

## Attributes

### tabbar

| 参数                | 说明                | 类型   | 可选值 | 默认值 |
| ------------------- | ------------------- | ------ | ------ | ------ |
| selectedIndex(sync) | 当前激活的item的key | number | —      | 0      |

### tabbar-item

| 参数  | 说明           | 类型    | 可选值 | 默认值 |
| ----- | -------------- | ------- | ------ | ------ |
| icon  | 图标           | string  | —      | —      |
| label | 标签显示文本   | string  | —      | —      |
| count | 展示的数字     | number  | —      | —      |
| dot   | 是否展示小红点 | boolean | —      | false  |