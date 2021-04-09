## dialog

:::demo

```html
<template>
  <p>component</p>
  <weui-button @click="showDialog('ios1')">iOS Dialog样式一</weui-button>
  <weui-button @click="showDialog('ios2')">iOS Dialog样式二</weui-button>
  <weui-button @click="showDialog('android1')">Android Dialog样式一</weui-button>
  <weui-button @click="showDialog('android2')">Android Dialog样式二</weui-button>
  <p>Event</p>
  <weui-button @click="showDialog('ios1F')">Event iOS 一</weui-button>
  <weui-button @click="showDialog('ios2F')">Event iOS 二</weui-button>
  <weui-button @click="showDialog('android1F')">Event Android 一</weui-button>
  <weui-button @click="showDialog('android2F')">Event Android 二</weui-button>
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
        switch(type) {
          case 'ios1':
            this.type = 'ios'
            this.title = '弹窗标题'
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.cancelText = '辅助操作'
            this.okText = '主操作'
            this.showCancel = true
            this.isVisible = true
            break
          case 'ios2':
            this.type = 'ios'
            this.title = null
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.okText = '知道了'
            this.showCancel = false
            this.isVisible = true
            break
          case 'android1':
            this.type = 'android'
            this.title = '弹窗标题'
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.cancelText = '辅助操作'
            this.okText = '主操作'
            this.showCancel = true
            this.isVisible = true
            break
          case 'android2':
            this.type = 'android'
            this.title = null
            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
            this.cancelText = '辅助操作'
            this.okText = '主操作'
            this.showCancel = true
            this.isVisible = true
            break
          case 'ios1F':
            this.$dialog.show({
              type: 'ios',
              title: '弹窗标题',
              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              cancelText: '辅助操作',
              okText: '主操作',
              onCancel: () => {
                console.log('点击辅助操作')
              },
              onOk: () => {
                console.log('点击主操作')
              }
            });
            break
          case 'ios2F':
            this.$dialog.show({
              type: 'ios',
              title: null,
              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              showCancel: false,
              okText: '知道了'
            });
            break
          case 'android1F':
            this.$dialog.show({
              type: 'android',
              title: '弹窗标题',
              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              cancelText: '辅助操作',
              okText: '主操作'
            });
            break
          case 'android2F':
            this.$dialog.show({
              type: 'android',
              title: null,
              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              cancelText: '辅助操作',
              okText: '主操作'
            });
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

| 参数       | 说明             | 类型    | 可选值        | 默认值 |
| ---------- | ---------------- | ------- | ------------- | ------ |
| visible    | 是否显示弹窗     | boolean | —             | false  |
| type       | 类型             | string  | ios / android | ios    |
| title      | 标题             | string  | —             | 提示   |
| cancelText | 取消按钮文本     | string  | —             | 取消   |
| okText     | 确定按钮文本     | string  | —             | 确定   |
| showCancel | 是否显示取消按钮 | boolean | —             | true   |
| showOk     | 是否显示确定按钮 | boolean | —             | true   |

## Event

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onClose  | 取消事件回调 | function() |
| onOk     | 确定事件回调 | function() |

## $dialog.show(config)

### config

| 参数       | 说明             | 类型          | 可选值 | 默认值 |
| ---------- | ---------------- | ------------- | ------ | ------ |
| type       | 类型             | string  | ios / android | ios    |
| title      | 标题             | string        | —      | 提示   |
| content    | 内容             | string / html | —      | —      |
| cancelText | 取消按钮文本     | string        | —      | 取消   |
| okText     | 确定按钮文本     | string        | —      | 确定   |
| showCancel | 是否显示取消按钮 | boolean       | —      | true   |
| showOk     | 是否显示确定按钮 | boolean       | —      | true   |
| onClose    | 取消事件回调     | function()    | —      | —      |
| onOk       | 确定事件回调     | function()    | —      | —      |