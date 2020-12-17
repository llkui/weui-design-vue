## from-textarea

:::demo

```html
<template>
  <weui-form :title="'文本域'" :desc="'输入更多内容的输入区域样式展示'">
    <weui-form-group :title="'问题描述'">
      <weui-textarea v-model="question" placeholder="请描述你所发生的问题" :rows="3" :maxlength="10"></weui-textarea>
    </weui-form-group>
    <weui-form-opr>
      <weui-button @click="save()">确定</weui-button>
    </weui-form-opr>
  </weui-form>
</template>
<script>
  export default {
    data() {
      return {
        question: ''
      }
    },
    methods: {
      save: function() {
        console.log(this.question)
      }
    }
  }
</script>
```

:::

## Attributes

| 参数           | 说明           | 类型    | 可选值 | 默认值 |
| -------------- | -------------- | ------- | ------ | ------ |
| value(v-model) | 输入框内容     | string  | —      | —      |
| placeholder    | 提示信息       | string  | —      | —      |
| rows           | 输入框行数     | number  | —      | 2      |
| maxlength      | 最大字符数     | number  | —      | 200    |
| showCount      | 是否显示计数器 | boolean | —      | true   |