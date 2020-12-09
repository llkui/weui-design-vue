## search-bar

:::demo

```html
<template>
  <weui-search-bar v-model="value" @input="input()"></weui-search-bar>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      input: function() {
        console.log(this.value)
      }
    }
  }
</script>
```

:::

## Attribute

| 参数           | 说明     | 类型   | 可选值 | 默认值 |
| -------------- | -------- | ------ | ------ | ------ |
| value(v-model) | 搜索内容 | string | —      | —      |