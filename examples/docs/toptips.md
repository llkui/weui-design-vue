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
          this.$toptips.show('错误提示');
        } else {
          this.$toptips.hide();
        }

      }
    }
  }
</script>
```

:::