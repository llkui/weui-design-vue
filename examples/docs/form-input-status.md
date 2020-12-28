## form

:::demo

```html
<template>
  <weui-form :title="'输入框状态'" :desc="'可体验表单输入样式，当输入位数不等于16位的时候点击按钮可看到报错样式。'" >
    <weui-form-control>
      <weui-form-group :title="'表单报错'">
        <weui-input v-model="card" :placeholder="'请输入16位数卡号'" :label="'卡号'" :maxlength="16" autofocus :error.sync="error"></weui-input>
      </weui-form-group>
      <weui-form-group :title="'表单只读、置灰'">
        <weui-input :placeholder="'1234567'" :label="'EMail'" readonly></weui-input>
        <weui-input :placeholder="'WeUI'" :label="'微信号'" readonly></weui-input>
      </weui-form-group>
    </weui-form-control>
    <weui-form-opr>
      <weui-button :disabled="card.length == 0 ? true : false" @click="save()">确定</button>
    </weui-form-opr>
  </weui-form>
</template>
<script>
  export default {
    data() {
      return {
        card: '',
        error: false
      }
    },
    methods: {
      save: function() {
        if(this.card.length < 16) {
          this.error = true
          this.$toptips.show('错误提示')
          setTimeout(() => {
            this.$toptips.hide()
          }, 1500)
        } else {
          this.$toast.success('已完成')
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
| title | 标题 | string | —      | —      |
| desc  | 描述 | string | —      | —      |

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
