<template>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell weui-cell_uploader">
      <div class="weui-cell__bd">
        <div class="weui-uploader">
          <div class="weui-uploader__hd" v-if="showCount || title">
            <p class="weui-uploader__title">{{ title }}</p>
            <div class="weui-uploader__info" v-if="showCount">
              {{ value.length }}/{{ maxCount }}
            </div>
          </div>
          <div class="weui-uploader__bd">
            <ul class="weui-uploader__files" id="uploaderFiles">
              <template v-for="(file, index) in value">
                <li
                  :key="index"
                  :class="
                    file.status === 'failed' || file.status === 'uploading'
                      ? 'weui-uploader__file weui-uploader__file_status'
                      : 'weui-uploader__file'
                  "
                  :style="'background-image: url(' + file.url + ')'"
                  @click="preview(file)"
                >
                  <div
                    class="weui-uploader__file-content"
                    v-if="file.status === 'failed'"
                  >
                    <i class="weui-icon-warn"></i>
                  </div>
                  <div
                    class="weui-uploader__file-content"
                    v-if="file.status === 'uploading'"
                    style="font-size: 12px"
                  >
                    上传中...
                  </div>
                </li>
              </template>
            </ul>
            <div class="weui-uploader__input-box">
              <div class="weui-uploader__input-box">
                <input
                  ref="input"
                  class="weui-uploader__input"
                  type="file"
                  :accept="accept"
                  :multiple="multiple"
                  @change="onChange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiUploader", // 注意这个name是必须的
  props: {
    afterRead: Function,
    title: String,
    accept: {
      type: String,
      default: 'image/*',
    },
    showCount: Boolean,
    maxSize: {
      type: Number,
      // Number.MAX_VALUE返回js中可以表示的最大的值
      default: Number.MAX_VALUE,
    },
    maxCount: {
      type: Number,
      default: 9,
    },
    value: Array,
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(val) {
      this.$emit("change", val);
    },
  },
  methods: {
    onChange(event) {
      let { files } = event.target;
      if (!files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);
      // 可优化beforeRead
      if (!files) {
        return;
      }
      // 多文件
      if (Array.isArray(files)) {
        // Promise.all成功fulfilled读完所有文件才fulfilled可调then
        Promise.all(files.map(this.readFile)).then((contents) => {
          let oversize = false;
          const payload = files.map((file, index) => {
            if (file.size > this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index],
            };
          });
          // 读取完成将文件和是否超过大小作为回调参数
          this.onAfterRead(payload, oversize);
        });
      } else {
        // 单文件
        this.readFile(files).then((content) => {
          this.onAfterRead({ file: files, content }, files.size > this.maxSize);
        });
      }
    },
    // 读取文件
    readFile(file) {
      return new Promise((resolve) => {
        // 可读blob或者file流
        const reader = new FileReader();

        reader.onload = (event) => {
          // 抛出读取结果，异步
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit("oversize", files);
      } else {
        // 读完文件后的操作
        this.afterRead && this.afterRead(files);
        // 重置input
        this.$refs.input && (this.$refs.input.value = "");
      }
    },
    preview(file) {
      this.$emit("click", file);
    },
  },
};
</script>