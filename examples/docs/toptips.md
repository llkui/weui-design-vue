## toptips

:::demo

```html
<template>
<weui-button @click.native="showToptips(true)" type="default">显示提示条</weui-button>
<weui-button @click.native="showToptips(false)" type="default">隐藏提示条</weui-button>
</template>
<script>
  export default {
    data() {
      return {
        isVisible: false
      }
    },
    methods: {
      showToptips: function(value) {
        if(value) {
          this.$toptips.show('错误提示', { duration: 0 });
        } else {
          this.$toptips.hide();
        }
      }
    }
  }
</script>
```

:::

## Event

### $toptips.show(text, config)

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 提示内容 | string | —      | —      |

### config

| 参数     | 说明                                       | 类型   | 可选值 | 默认值 |
| -------- | ------------------------------------------ | ------ | ------ | ------ |
| duration | 显示时长后自动关闭（单位：ms），0 表示永久 | number | —      | 2000   |

### $toptips.hide()

关闭提示条