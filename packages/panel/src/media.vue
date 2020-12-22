<template>
  <div
    :class="cell ? 'weui-media-box_small-appmsg' : 'weui-media-box_appmsg'"
    class="weui-media-box"
  >
    <template v-if="!cell">
      <div class="weui-media-box__hd" v-if="icon">
        <img :src="icon" alt class="weui-media-box__thumb" />
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">{{title}}</h4>
        <p class="weui-media-box__desc">{{desc}}</p>
        <slot name="info"></slot>
      </div>
    </template>
    <template v-if="cell">
      <slot></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: 'WeuiMedia',
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    info: {
      type: Array,
      default: null
    },
    cell: {
      type: Boolean,
      default: false
    }
  }
}
</script>