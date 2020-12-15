## half screen dialog

:::demo

```html
<template>
  <weui-button @click="show('custom')" type="default">样式一</weui-button>
  <weui-button @click="show('dialog')" type="default">样式二</weui-button>
  <weui-half-screen-dialog :visible="custom" type="custom" title="标题" @onClose="close('custom')">
    <br>
    <br>
    可放自定义内容
    <br>
    <br>
    <br>
    <br>
  </weui-half-screen-dialog>
  <weui-half-screen-dialog :visible="dialog" type="dialog" title="标题" subtitle="标题" desc="辅助描述内容，可根据实际需要安排" tips="辅助提示内容，可根据实际需要安排" :showMore="true" cancelText="辅助操作" okText="主操作" @onClose="close('dialog')">
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
| maskClosable | 点击蒙层是否允许关闭      | boolean | —               | true   |
| type         | 类型                      | string  | dialog / custom | dialog |
| title        | 标题                      | string  | —               | —      |
| subtitle     | 副标题 `dialog`           | string  | —               | —      |
| desc         | 描述 `dialog`             | string  | —               | —      |
| tips         | 提示 `dialog`             | string  | —               | —      |
| showClose    | 是否显示关闭按钮 `dialog` | boolean | —               | true   |
| showBack     | 是否显示返回按钮 `dialog` | boolean | —               | false  |
| showMore     | 是否显示更多按钮 `dialog` | boolean | —               | false  |
| showCancel   | 是否显示取消按钮 `dialog` | boolean | —               | true   |
| showOk       | 是否显示确定按钮 `dialog` | boolean | —               | true   |
| cancelText   | 取消按钮文本 `dialog`     | string  | —               | 取消   |
| onText       | 确定按钮文本 `dialog`     | string  | —               | 确定   |

## Event

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onClose  | 关闭事件回调 | function() |
| onBack   | 返回事件回调 | function() |
| onMore   | 更多事件回调 | function() |
| onCancel | 取消事件回调 | function() |
| onOk     | 确定事件回调 | function() |