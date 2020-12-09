## form

:::demo

```html
<template>
  <weui-form :title="'验证码'" :desc="'验证手机号样式'" >
    <weui-form-group :tips="'收不到验证码'">
      <weui-input placeholder="请输入手机号" label="手机号" type="number" pattern="[0-9]*" right-slot :maxlength="11">
        <weui-button :type="'text'">
          <weui-icon :type="'info-circle'" :mini="true"></weui-icon>
        </weui-button>
      </weui-input>
      <weui-input v-model="code" placeholder="请输入验证码" label="验证码" type="number" pattern="[0-9]*" right-slot :maxlength="6">
        <weui-button :type="'default'" :in-form="true">获取验证码</weui-button>
      </weui-input>
    </weui-form-group>
    <weui-form-tip>
      <template #content>
        <weui-checkbox-agree v-model="agree" :animate.sync="agreeAnimate">
          阅读并同意
          <a href="javascript:">《相关条款》</a>
        </weui-checkbox-agree>
      </template>
    </weui-form-tip>
    <weui-form-opr>
      <weui-button :disabled="code.length == 0" @click.native="save()">确定</weui-button>
    </weui-form-opr>
  </weui-form>
</template>
<script>
  export default {
    data() {
      return {
        code: '',
        agree: false,
        agreeAnimate: false
      }
    },
    methods: {
      save: function() {
        console.log(this.agreeAnimate)
        if(!this.agree) {
          this.agreeAnimate = true
        }
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
| title | 标题 | string | -      | -      |
| desc  | 描述 | string | -      | -      |

### form-group

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | —      | —      |

### input

| 参数           | 说明                                         | 类型    | 可选值      | 默认值 |
| -------------- | -------------------------------------------- | ------- | ----------- | ------ |
| label          | 标签                                         | string  | —           | —      |
| value(v-model) | 输入框内容                                   | string  | —           | —      |
| type           | 类型                                         | string  | 同input标签 | —      |
| placeholder    | 输入框为空时占位符                           | string  | —           | —      |
| readonly       | 只读                                         | boolean | —           | false  |
| autofocus      | 自动聚焦                                     | boolean | —           | false  |
| maxlength      | 最大输入长度，设置为 -1 的时候不限制最大长度 | number  | —           | -1     |
| pattern        | 输入内容的正则表达式                         | number  | —           | -1     |
| error(sync)    | 错误状态                                     | boolean | —           | false  |

### checkbox-agree

| 参数           | 说明     | 类型    | 可选值 | 默认值 |
| -------------- | -------- | ------- | ------ | ------ |
| value(v-model) | 是否选择 | boolean | -      | false  |
| animate        | 提醒动画 | boolean | -      | false  |
