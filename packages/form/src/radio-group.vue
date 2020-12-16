<template>
  <div class="weui-cells_radio">
    <slot></slot>
    <a
      @click="more()"
      class="weui-cell weui-cell_active weui-cell_link"
      href="javascript:"
      v-if="showMore"
    >
      <div class="weui-cell__bd">{{ moreText }}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "WeuiRadioGroup",
  props: {
    value: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    showMore: {
      type: Boolean,
      default: false
    },
    moreText: {
      type: String,
      default: '添加更多'
    }
  },
  methods: {
    more: function () {
      this.$emit('onMore')
    }
  }
};
</script>