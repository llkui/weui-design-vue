## action-sheet

:::demo

```html
<template>
  <weui-button type="default" @click="show('ios')">iOS ActionSheet</weui-button>
  <weui-button type="default" @click="show('android')">Android ActionSheet</weui-button>
</template>
<script>
  export default {
    methods: {
      show: function(value) {
        const config = {
          type: value,
          title: '这是一个标题，可以为一行或者两行。',
          maskClosable: value === 'ios' ? true : false
        }
        const menus = [
          { text: '示例菜单' },
          { text: '示例菜单' },
          { text: '负向菜单', type: 'warn' }
        ]
        this.$actionSheet.show(config, menus).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
```

:::

## $actionSheet.show(config, menus)

### config

| 参数         | 说明                 | 类型    | 可选值        | 默认值 |
| ------------ | -------------------- | ------- | ------------- | ------ |
| type         | 类型                 | string  | ios / androis | ios    |
| title        | 标题                 | string  | —             | —      |
| cancelText   | 取消文本             | string  | —             | 取消   |
| maskClosable | 点击蒙层是否允许关闭 | boolean | —             | true   |

## menus

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| text | 文本 | string | —      | —      |
| type | 类型 | string | warn   | —      |