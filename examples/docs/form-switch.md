## switch

:::demo

```html
<template>
  <weui-form :title="'开关样式展示'">
    <weui-form-group>
      <weui-switch :value="value" @change="onChange($event)">标题文字</weui-switch>
      <weui-switch IE>兼容IE Edge的版本</weui-switch>
    </weui-form-group>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: false
    }
  },
  methods: {
    onChange(e) {
      this.value = e;
    }
  }
};
</script>
```

:::

## Attributes

### form

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | -      | -      |
| desc | 描述 | string | -      | -      |

### form-group

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | -      | -      |

### switch

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| value | 当前输入的值 | boolean | true/false | false |

