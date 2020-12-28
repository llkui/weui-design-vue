## dialog

:::demo

```html
<template>
  <weui-button @click="showDialog('ios1')">iOS Dialog样式一</weui-button>
  <weui-button @click="showDialog('ios2')">iOS Dialog样式二</weui-button>
  <weui-button @click="showDialog('android1')">Android Dialog样式一</weui-button>
  <weui-button @click="showDialog('android2')">Android Dialog样式二</weui-button>
  <weui-dialog :visible="isVisible" :type="type" :title="title" :cancelText="cancelText" :okText="okText" :showCancel="showCancel" @onCancel="handleCancel($event)" @onOk="handleOk($event)">
    <p>{{content}}</p>
  </weui-dialog>
</template>
<script>
  export default {
    data() {
      return {
        isVisible: false,
        type: 'ios',
        title: '',
        content: '',
        cancelText: '',
        okText: '',
        showCancel: true
      };
    },
    methods: {
      showDialog(type) {
        this.isVisible = true
        switch(type) {
          case 'ios1':
            this.type = 'ios'
            this.title = '弹窗标题'
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.cancelText = '辅助操作'
            this.okText = '主操作'
            break
          case 'ios2':
            this.type = 'ios'
            this.title = null
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.showCancel = false
            this.cancelText = null
            this.okText = '知道了'
            break
          case 'android1':
            this.type = 'android'
            this.title = '弹窗标题'
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.cancelText = '辅助操作'
            this.okText = '主操作'
            break
          case 'android2':
            this.type = 'android'
            this.title = null
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.cancelText = '辅助操作'
            this.okText = '主操作'
            break
        }
      },
      handleCancel($event) {
        this.isVisible = false
      },
      handleOk($event) {
        this.isVisible = false
      }
    }
  }
</script>
```

:::

## Attributes

| 参数       | 说明             | 类型    | 可选值 | 默认值 |
| ---------- | ---------------- | ------- | ------ | ------ |
| visible    | 是否显示弹窗     | boolean | —      | false  |
| title      | 标题             | string  | —      | —      |
| cancelText | 取消按钮文本     | string  | —      | 取消   |
| okText     | 确定按钮文本     | string  | —      | 确定   |
| showCancel | 是否显示取消按钮 | boolean | —      | true   |
| showOk     | 是否显示确定按钮 | boolean | —      | true   |

## Event

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onClose  | 取消事件回调 | function() |
| onOk     | 确定事件回调 | function() |