<template>
  <div
    @click="$emit('onClick')"
    class="weui-gallery"
    style="display: block"
    v-if="visible"
  >
    <span
      :style="'background-image: url(' + src + ')'"
      class="weui-gallery__img"
    ></span>
    <div class="weui-gallery__opr" v-if="canDelete">
      <a
        @click.stop="deleteGallery()"
        class="weui-gallery__del"
        href="javascript:"
      >
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiGallery',
  props: {
    src: {
      type: String,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    canDelete: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteGallery () {
      this.$emit('onDelete');
    }
  }
};
</script>