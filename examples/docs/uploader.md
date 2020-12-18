## uploader

:::demo 上传组件，一般配合组件Gallery来使用。

```html
<template>
  <weui-cell-group>
    <weui-cell>
      <template #title>
        <weui-uploader :afterRead="afterRead" v-model="fileList" @onClick="preview($event)" showCount :multiple="true" @oversize="oversize($event)"></weui-uploader>
      </template>
    </weui-cell>
  </weui-cell-group>
  <weui-gallery :visible="show" :src="img" :canDelete="true" @onDelete="deleteGallery()" @onClick="hide()"></weui-gallery>
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
            progress: '50%'
          },
          {
            url: pic,
            status: 'failed',
          },
          {
            url: pic,
            status: 'done',
          },
        ],
        img: '',
      }
    },
    methods: {
      afterRead(file) {
        console.log(file)
        this.fileList.push({
          url: file.content,
          status: 'done',
        })
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
```

:::

## Attributes

### uploader

| 参数           | 说明                      | 类型           | 可选值 | 默认值   |
| -------------- | ------------------------- | -------------- | ------ | -------- |
| value(v-model) | 已上传的文件列表          | FileListItem[] | —      | —        |
| title          | 标题                      | string         | —      | 图片上传 |
| showCount      | 显示数量                  | boolean        | —      | false    |
| maxCount       | 最大数量                  | number         | —      | 9        |
| accept         | 允许上传的文件类型        | string         | —      | image/*  |
| multiple       | 是否开启文件多选          | boolean        | —      | false    |
| max-size       | 文件大小限制，单位为 byte | number/string  | —      | —        |
| after-read     | 文件读取完成后的回调函数  | Function(e)    |        | —        |
| showButton     | 是否展示上传按钮          | boolean        |        | true     |

### FileListItem

| 参数     | 说明         | 类型   | 可选值                    | 默认值 |
| -------- | ------------ | ------ | ------------------------- | ------ |
| url      | 文件路径     | string | —                         | —      |
| status   | 文件上传状态 | string | uploading / failed / done | —      |
| progress | 文件上传进度 | string | —                         | —      |


## Event

| 参数       | 说明                     | 回调参数 |
| ---------- | ------------------------ | -------- |
| onClick    | 点击文件事件回调         | fileItem |
| onOversize | 文件大小超过限制事件回调 | fileItem |
