## form

:::demo

```html
<template>
  <weui-form :title="'复选框样式展示'">
    <weui-form-group>
      <weui-checkbox-group name="111" :value="value" @input="onChange($event)">
        <weui-checkbox value="1">standard is dealt for u.</weui-checkbox>
        <weui-checkbox value="2">standard is dealicient for u.</weui-checkbox>
        <weui-checkbox value="3">standard is dealicient for u.</weui-checkbox>
      </weui-checkbox-group>
    </weui-form-group>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: []
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

### input

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| label | 标签 | string | -      | -      |
| value | 当前输入的值 | string | - | - |
| type | 类型 | string | text/number | - |
| placeholder | 输入框为空时占位符 | string | - | - |
| readonly | 只读 | boolean | true/false | false |
| autofocus | 自动聚焦 | boolean | true/false | false |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | number | - | -1 |
