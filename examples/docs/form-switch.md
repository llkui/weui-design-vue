## switch

:::demo

```html
<template>
  <weui-form :title="'开关样式展示'">
    <weui-form-group>
      <weui-switch v-model="value">标题文字</weui-switch>
      <weui-switch v-model="valueIE" IE>兼容IE Edge的版本</weui-switch>
    </weui-form-group>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: false,
      valueIE: false
    }
  }
};
</script>
```

:::

## Attributes

### switch

| 参数  | 说明     | 类型    | 可选值 | 默认值 |
| ----- | -------- | ------- | ------ | ------ |
| value | 是否选中 | boolean | —      | false  |

