## search-bar

:::demo

```html
<template>
  <weui-search-bar @input="input($event)"></weui-search-bar>
</template>
<script>
  export default {
    methods: {
      input: function(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::

## Event

| 事件名称 | 说明             | 回调参数    |
| -------- | ---------------- | ----------- |
| input    | 获得用户输入内容 | function(e) |