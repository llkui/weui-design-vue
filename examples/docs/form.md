## form

:::demo

```html
<template>
  <weui-button type="default" @click.native="goUrl('/form-page')">表单结构</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-input-status')">输入框状态</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-vcode')">验证码</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-checkbox')">复选框</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-radio')">单选框</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-switch')">开关</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-select')">原生选择框</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-select-primary')">模拟选择框</weui-button>
  <weui-button type="default" @click.native="goUrl('/form-textarea')">文本域</weui-button>
</template>
<script>
  export default {
    methods: {
      goUrl: function(url) {
        this.$router.push(url)
      }
    }
  }
</script>
```

:::