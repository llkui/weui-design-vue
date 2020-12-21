## checkbox

:::demo

```html
<template>
  <weui-form :title="'复选框样式展示'">
    <weui-form-control>
      <weui-form-group>
        <weui-checkbox-group name="type" v-model="value" @input="onChange()" :showMore="true">
          <weui-checkbox value="1" label="standard is dealt for u."></weui-checkbox>
          <weui-checkbox value="2" label="standard is dealicient for u."></weui-checkbox>
        </weui-checkbox-group>
      </weui-form-group>
    </weui-form-control>
    <weui-form-tip>
      <template #tipContent>
        点击下一步即表示<a href="javascript:">同意用户协议</a>
      </template>
    </weui-form-tip>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: ['2']
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

| 参数           | 说明         | 类型    | 可选值 | 默认值 |
| -------------- | ------------ | ------- | ------ | ------ |
| name           | 标识符       | string  | -      | -      |
| value(v-model) | 当前选中的值 | array   | -      | -      |
| showMore       | 是否显示更多 | boolean | -      | false  |

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onMore   | 更多事件回调 | function() |

### checkbox

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| value | 选项的值 | string | -      | -      |
| label | 选项名   | string | -      | -      |
