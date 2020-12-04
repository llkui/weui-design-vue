## radio

:::demo

```html
<template>
  <weui-form :title="'单选框样式展示'">
    <weui-form-group>
      <weui-radio-group name="111" @input="onChange($event)" :value="value">
        <weui-radio id="1" value="1">standard is dealt for u.</weui-radio>
        <weui-radio id="2" value="2">standard is dealicient for u.</weui-radio>
        <weui-radio id="3" value="3">standard is dealicient for u.</weui-radio>
      </weui-radio-group>
    </weui-form-group>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: null
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

### radio-group

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| name | 标识符 | string | -      | -      |
| value | 当前输入的值 | string | - | - |

### radio

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| value | 当前输入的值 | string | - | - |

