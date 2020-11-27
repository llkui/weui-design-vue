## toast

:::demo

```html
<template>
  <weui-button type="default" @click.native="success()">成功提示</weui-button>
  <weui-button type="default" @click.native="warn()">失败提示</weui-button>
  <weui-button type="default" @click.native="loading()">加载中提示</weui-button>
  <weui-button type="default" @click.native="info()">文字提示</weui-button>
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
        this.$toast.loading('加载中');
      },
      info: function() {
        this.$toast.info('文字提示');
      }
    }
  }
</script>
```

:::