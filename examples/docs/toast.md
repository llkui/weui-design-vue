## toast

:::demo

```html
<template>
  <weui-button type="default" @click="success()">成功提示</weui-button>
  <weui-button type="default" @click="warn()">失败提示</weui-button>
  <weui-button type="default" @click="loading()">加载中提示</weui-button>
  <weui-button type="default" @click="info()">文字提示</weui-button>
</template>
<script>
  export default {
    methods: {
      success: function() {
        this.$toast.success('已成功');
      },
      warn: function() {
        this.$toast.warn('获取连接失败');
      },
      loading: function() {
        this.$toast.loading('加载中', { duration: 0 });
        setTimeout(() => {
          this.$toast.hide()
        }, 4000)
      },
      info: function() {
        this.$toast.info('文字提示');
      }
    }
  }
</script>
```

:::

## Event

### $toast.success(text, config)
### $toast.warn(text, config)
### $toast.loading(text, config)
### $toast.info(text, config)

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 提示内容 | string | —      | —      |

### config

| 参数     | 说明                                       | 类型   | 可选值 | 默认值 |
| -------- | ------------------------------------------ | ------ | ------ | ------ |
| duration | 显示时长后自动关闭（单位：ms），0 表示永久 | number | —      | 2000   |

### $toast.hide()

关闭提示