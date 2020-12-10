<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">{{ title }}</div>
    <div class="weui-panel__bd">
      <slot></slot>
    </div>
    <div class="weui-panel__ft" v-if="isLink">
      <a
        @click="clickLink()"
        class="weui-cell weui-cell_active weui-cell_access weui-cell_link"
        href="javascript:"
      >
        <div class="weui-cell__bd">{{linkText}}</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiPanel",
  props: {
    title: {
      type: String,
      default: null,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkText: {
      type: String,
      default: '查看更多'
    }
  },
  methods: {
    clickLink () {
      this.$emit('onLink');
    }
  }
};
</script>