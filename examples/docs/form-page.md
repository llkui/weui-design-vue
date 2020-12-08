## form

:::demo

```html
<template>
  <weui-form :title="'表单结构'" :desc="'展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。'" >
    <weui-form-group :title="'表单组标题'">
      <weui-input :placeholder="'填写本人微信号'" :label="'微信号'" v-model="wechat"></weui-input>
      <weui-input :placeholder="'填写本人微信号的昵称'" :label="'昵称'"></weui-input>
      <weui-input :placeholder="'填写绑定的电话号码'" :label="'联系电话'" :type="'number'" :pattern="'[0-9]*'"></weui-input>
    </weui-form-group>
    <weui-form-tip :value="'表单页提示，居中对齐'" @click.native="show()"></weui-form-tip>
    <weui-form-opr>
      <weui-button :disabled="wechat.length == 0 ? true : false">确定</weui-button>
    </weui-form-opr>
    <weui-form-tip :value="'表单页提示，居中对齐'"></weui-form-tip>
    <weui-form-extra>
      <weui-footer>
        <weui-footer-links>
          <weui-footer-link>底部链接文本</weui-footer-link>
        </weui-footer-links>
        <weui-footer-text>Copyright © 2008-2019 weui.io</weui-footer-text>
      </weui-footer>
    </weui-form-extra>
  </weui-form>
</template>
<script>
  export default {
    data() {
      return {
        wechat: ''
      }
    },
    methods: {
      show: function() {
        console.log(this.wechat)
      }
    }
  }
</script>
```

:::

## Attributes

### form

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | —      | —      |
| desc  | 描述 | string | —      | —      |

### form-group

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | —      | —      |

### form-tip

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| value | 提示 | string | —      | —      |

### form-opr

### form-extra

### input

| 参数           | 说明                                         | 类型    | 可选值      | 默认值 |
| -------------- | -------------------------------------------- | ------- | ----------- | ------ |
| label          | 标签                                         | string  | —           | —      |
| value(v-model) | 输入框内容                                   | string  | —           | —      |
| type           | 类型                                         | string  | text/number | —      |
| placeholder    | 输入框为空时占位符                           | string  | —           | —      |
| readonly       | 只读                                         | boolean | true/false  | false  |
| autofocus      | 自动聚焦                                     | boolean | true/false  | false  |
| maxlength      | 最大输入长度，设置为 -1 的时候不限制最大长度 | number  | —           | -1     |
