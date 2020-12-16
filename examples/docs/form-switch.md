## switch

:::demo

```html
<template>
  <weui-form :title="'开关样式展示'">
    <weui-form-control>
      <weui-form-group>
        <weui-switch v-model="value" label="标题文字"></weui-switch>
        <weui-switch v-model="valueIE" label="兼容IE Edge的版本" IE></weui-switch>
      </weui-form-group>
    </weui-form-control>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: false,
      valueIE: true
    }
  }
};
</script>
```

:::

## Attributes

### switch

| 参数           | 说明     | 类型    | 可选值 | 默认值 |
| -------------- | -------- | ------- | ------ | ------ |
| value(v-model) | 是否选中 | boolean | —      | false  |
| label          | 选项名   | string  | —      | —      |

