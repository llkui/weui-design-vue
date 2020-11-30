<template>
  <div class="weui-gallery" style="display: block" v-if="show">
    <span
      class="weui-gallery__img"
      :style="'background-image: url(' + img + ')'"
    ></span>
    <div class="weui-gallery__opr" v-if="canDelete">
      <a href="javascript:" class="weui-gallery__del">
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiGallery", // 注意这个name是必须的
  props: {
    img: {
      type: String,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
    canDelete: {
      type: Boolean,
      default: false,
    },
  },
};
</script>