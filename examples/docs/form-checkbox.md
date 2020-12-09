## checkbox

:::demo

```html
<template>
  <weui-form :title="'复选框样式展示'">
    <weui-form-group>
      <weui-checkbox-group name="type" v-model="value" @input="onChange()">
        <weui-checkbox value="1" label="standard is dealt for u."></weui-checkbox>
        <weui-checkbox value="2" label="standard is dealicient for u."></weui-checkbox>
        <weui-checkbox value="3" label="standard is dealicient for u."></weui-checkbox>
      </weui-checkbox-group>
    </weui-form-group>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: ['3']
    }
  },
  methods: {
    onChange() {
     console.log(this.value)
    }
  }
};
</script>
```

:::

## Attributes

### checkbox-group

| 参数  | 说明         | 类型   | 可选值 | 默认值 |
| ----- | ------------ | ------ | ------ | ------ |
| name  | 标识符       | string | -      | -      |
| value | 当前选中的值 | array  | -      | -      |

### checkbox

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| value | 选项的值 | string | -      | -      |
| label | 标签名   | string | -      | -      |
