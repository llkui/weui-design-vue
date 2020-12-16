<template>
  <div class="weui-cells_checkbox">
    <slot></slot>
    <a
      href="javascript:"
      class="weui-cell weui-cell_active weui-cell_link"
      v-if="showMore"
      @click="more()"
    >
      <div class="weui-cell__bd">{{ moreText }}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "WeuiCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: () => [],
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