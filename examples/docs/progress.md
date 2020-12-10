## progress

:::demo

```html
<template>
  <div class="progress">
    <weui-progress :percent="progress1" @onCancel="cancel()"></weui-progress>
    <weui-progress :percent="progress2" :showCancel="false"></weui-progress>
    <weui-progress :percent="progress3" @onCancel="cancel()"></weui-progress>
    <weui-button @click.native="upload()" :disabled="isLoading">上传</weui-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isLoading: false,
        progress1: 10,
        progress2: 30,
        progress3: 50
      }
    },
    methods: {
      cancel: function() {
        console.log('cancel');
      },
      upload: function() {
        this.isLoading = true
        this.progress1 = 10
        this.progress2 = 30
        this.progress3 = 50
        let complete = 0
        const uploadInterval = setInterval(() => {
          let progress1 = this.progress1 + 1
          let progress2 = this.progress2 + 1
          let progress3 = this.progress3 + 1
          if(progress1 <= 100) {
            if(progress1 === 100) {
              complete++
            }

            this.progress1 = progress1
          }
          if(progress2 <= 100) {
            if(progress2 === 100) {
              complete++
            }

            this.progress2 = progress2
          }
          if(progress3 <= 100) {
            if(progress3 === 100) {
              complete++
            }

            this.progress3 = progress3
          }

          if(complete >= 3) {
            clearInterval(uploadInterval)
          }
        }, 20)
      }
    }
  }
</script>
<style>
  .progress {
    background-color: #ffffff;
    padding: 10px;
  }
  .weui-progress {
    margin-bottom: 10px;
  }
  .weui-progress:last-child {
    margin-bottom: 0;
  }
</style>
```

:::

## Attributes

| 参数       | 说明             | 类型    | 可选值 | 默认值 |
| ---------- | ---------------- | ------- | ------ | ------ |
| percent    | 进度百分比       | number  | 0-100  | 0      |
| showCancel | 是否显示取消按钮 | boolean | —      | false  |

## Event

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onCancel | 取消事件回调 | function() |