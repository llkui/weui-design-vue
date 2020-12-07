## uploader

:::demo 上传组件，一般配合组件Gallery来使用。

```html
<template>
  <weui-uploader :afterRead="afterRead" v-model="fileList" @click="preview($event)" showCount title="图片上传" @oversize="oversize($event)"></weui-uploader>
  <weui-gallery :show="show" :img="img" :canDelete="true" @delete="deleteGallery()" @click="hide()"></weui-gallery>
</template>
<script>
import pic from './../assets/pic.png'
  export default {
    data() {
      return {
        show: false,
        fileList: [
          {
            url: pic,
            status: 'uploading',
          },
          {
            url: pic,
            status: 'failed',
          },
        ],
        img: '',
      }
    },
    methods: {
      afterRead(file) {
        this.fileList.push({
          url: file.content,
          status: 'done',
        },
        )
      },
      preview($event) {
        this.img = $event.url;
        this.show = true;
      },
      deleteGallery() {
        this.show = false;
        this.fileList.forEach((item,index) => {
            if(item.url.indexOf(this.img) !== -1){
                this.fileList.splice(index, 1)
            }
        });
      },
      hide() {
        this.show = false;
      },
      oversize(e){
        console.log('文件过大')
      },
    }
  }
</script>

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| v-model (fileList) | 已上传的文件列表 | FileListItem[] | - | - |
| title | 标题 | string | -      | -      |
| showCount | 显示数量 | Boolean | true/false | false |
| maxCount | 最大数量 | Number | - | 9 |
| accept | 允许上传的文件类型 | string | - | image/* |
| multiple | 是否开启图片多选 | boolean | - | false |
| max-size | 文件大小限制，单位为 byte | number/string | - | - |
| after-read | 文件读取完成后的回调函数 | Function(e) | - | - |

## Events

| 参数 | 说明 | 回调参数   |
| ---- | ---- | ---- |
| oversize | 文件大小超过限制时触发 | fileItem |
