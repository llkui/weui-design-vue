## text

:::demo

```html
<weui-footer>
  <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
</weui-footer>
```

:::

## link

:::demo

```html
<template>
  <weui-footer>
    <weui-footer-links>
      <weui-footer-link @onClick="show()">底部链接</weui-footer-link>
    </weui-footer-links>
    <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
  </weui-footer>

  <weui-footer>
    <weui-footer-links>
      <weui-footer-link>底部链接</weui-footer-link>
      <weui-footer-link>底部链接</weui-footer-link>
    </weui-footer-links>
    <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
  </weui-footer>
</template>
<script>
  export default {
    methods: {
      show: function() {
        console.log('click')
      }
    }
  }
</script>
```

:::

## fixed

:::demo

```html
<weui-footer :fixed="true">
  <weui-footer-links>
    <weui-footer-link>WeUI首页</weui-footer-link>
  </weui-footer-links>
  <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
</weui-footer>
```

:::

## Attributes

### weui-footer

| 参数  | 说明           | 类型    | 可选值 | 默认值 |
| ----- | -------------- | ------- | ------ | ------ |
| fixed | 是否固定在底部 | boolean | —      | false  |

## Event

### weui-footer-link

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onClick    | 点击事件回调 | function() |