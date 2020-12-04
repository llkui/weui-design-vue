## checkbox

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

### checkbox-group

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| name | 标识符 | string | -      | -      |
| value | 当前输入的值 | array | - | - |

### checkbox

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| value | 当前输入的值 | string | - | - |
