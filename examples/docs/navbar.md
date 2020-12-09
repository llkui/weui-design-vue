## navbar

:::demo

```html
<template>
  <weui-navbar :selectedIndex.sync="selectedIndex">
    <weui-navbar-item title="选项一"></weui-navbar-item>
    <weui-navbar-item title="选项二"></weui-navbar-item>
    <weui-navbar-item title="选项三"></weui-navbar-item>
  </weui-navbar>
</template>
<script>
  export default {
    data() {
      return {
        selectedIndex: 1
      }
    }
  }
</script>
```

:::

## Attributes

### navbar

| 参数                | 说明                | 类型   | 可选值 | 默认值 |
| ------------------- | ------------------- | ------ | ------ | ------ |
| selectedIndex(sync) | 当前激活的item的key | number | —      | 0      |

### navbar-item

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| title | 导航栏显示文本 | string | —      | —      |