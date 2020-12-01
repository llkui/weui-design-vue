## half screen dialog

:::demo

```html
<template>
  <weui-button @click.native="show('custom')" type="default">样式一</weui-button>
  <weui-button @click.native="show('dialog')" type="default">样式二</weui-button>
  <weui-half-screen-dialog :visible="custom" type="custom" title="标题" @close="close('custom')">
    <template slot="content">
      <br>
      <br>
      可放自定义内容
      <br>
      <br>
      <br>
      <br>
    </template>
  </weui-half-screen-dialog>
  <weui-half-screen-dialog :visible="dialog" type="dialog" title="标题" subtitle="标题" desc="辅助描述内容，可根据实际需要安排" tips="辅助提示内容，可根据实际需要安排" :showMore="true" cancelText="辅助操作" okText="主操作" @close="close('dialog')">
  </weui-half-screen-dialog>
</template>
<script>
  export default {
    data() {
      return {
        custom: false,
        dialog: false
      }
    },
    methods: {
      show: function(type) {
        this[type] = true
      },
      close: function(type) {
        this[type] = false
      }
    }
  }
</script>
```

:::

## Attributes

| 参数         | 说明                      | 类型    | 可选值          | 默认值 |
| ------------ | ------------------------- | ------- | --------------- | ------ |
| visible      | 是否显示                  | boolean | —               | false  |
| type         | 类型                      | string  | dialog / custom | dialog |
| title        | 标题                      | string  | —               | —      |
| subtitle     | 副标题 `dialog`           | string  | —               | —      |
| content      | 内容 `custom`             | slot    | —               | —      |
| desc         | 描述 `dialog`             | string  | —               | —      |
| tips         | 提示 `dialog`             | string  | —               | —      |
| maskClosable | 点击蒙层是否允许关闭      | boolean | —               | true   |
| showClose    | 是否显示关闭按钮 `dialog` | boolean | —               | true   |
| showBack     | 是否显示返回按钮 `dialog` | boolean | —               | false  |

## Event

| 事件名称 | 说明         | 回调参数    |
| -------- | ------------ | ----------- |
| close    | 关闭事件回调 | function(e) |
| back     | 返回事件回调 | function(e) |
| more     | 更多事件回调 | function(e) |
| onCancel | 取消事件回调 | function(e) |
| onOk     | 确定事件回调 | function(e) |