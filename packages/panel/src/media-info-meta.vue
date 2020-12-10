<template>
  <li
    :class="line ? 'weui-media-box__info__meta_extra' : ''"
    class="weui-media-box__info__meta"
  >{{text}}</li>
</template>
<script>
export default {
  name: 'WeuiMediaInfoMeta',
  props: {
    text: {
      type: String,
      default: null,
    },
    line: {
      type: Boolean,
      default: false
    }
  }
}
</script>