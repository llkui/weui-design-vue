## slider

:::demo 请切换成手机模式查看滑动效果

```html
<template>
  <weui-slider :percent="30" :disabled="true" :showValue="false"></weui-slider>
  <weui-slider :percent.sync="percent"></weui-slider>
</template>
<script>
  export default {
    data() {
      return {
        percent: 50
      }
    }
  }
</script>
```

:::

## Attributes

| 参数      | 说明             | 类型    | 可选值 | 默认值 |
| --------- | ---------------- | ------- | ------ | ------ |
| percent   | 进度             | number  | 0-100  | 0      |
| disabled  | 是否禁用         | boolean | —      | false  |
| showValue | 是否显示进度文字 | boolean | —      | true   |