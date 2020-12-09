## radio

:::demo

```html
<template>
  <weui-form :title="'单选框样式展示'">
    <weui-form-group>
      <weui-radio-group name="type" v-model="value" :showMore="true">
        <weui-radio value="1">cell standard</weui-radio>
        <weui-radio value="2">cell standard</weui-radio>
      </weui-radio-group>
    </weui-form-group>
  </weui-form>
</template>
<script>
export default {
  data(){
    return {
      value: '2'
    }
  }
};
</script>
```

:::

## Attributes

### radio-group

| 参数     | 说明         | 类型    | 可选值 | 默认值   |
| -------- | ------------ | ------- | ------ | -------- |
| name     | 标识符       | string  | —      | —        |
| value    | 当前输入的值 | string  | —      | —        |
| showMore | 是否显示更多 | boolean | —      | false    |
| moreText | 更多文本     | string  | —      | 添加更多 |

| 事件名称 | 说明         | 回调参数    |
| -------- | ------------ | ----------- |
| more     | 更多事件回调 | function(e) |

### radio

| 参数  | 说明         | 类型   | 可选值 | 默认值 |
| ----- | ------------ | ------ | ------ | ------ |
| value | 当前输入的值 | string | —      | —      |