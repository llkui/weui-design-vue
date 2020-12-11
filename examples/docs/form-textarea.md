## from-textarea

:::demo

```html
<template>
  <weui-textarea v-model="username" placeholder="请描述你所发生的问题" :rows="3" :maxlength="10"></weui-textarea>
  <weui-button @click="show()">show</weui-button>
</template>
<script>
  export default {
    data() {
      return {
        username: ''
      }
    },
    methods: {
      show: function() {
        console.log(this.username)
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