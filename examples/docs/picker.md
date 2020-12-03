## picker

:::demo 请切换成手机模式查看选择效果

```html
<template>
  <weui-button @click.native="show()">show</weui-button>
  <weui-picker :show="visible" :options="options" :selectedI="5"></weui-picker>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        options: [
          { label: '飞机票', value: '1', disabled: false },
          { label: '火车票', value: '2', disabled: false },
          { label: '的士票', value: '3', disabled: false },
          { label: '公交票(disabled)', value: '4', disabled: true },
          { label: '其他(disabled)', value: '5', disabled: true },
          { label: '好的(disabled)', value: '6', disabled: true },
        ]
      }
    },
    methods: {
      show: function() {
        const config = {
          options: this.options,
          default: 5
        }
        this.$picker.show(config).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
```

:::