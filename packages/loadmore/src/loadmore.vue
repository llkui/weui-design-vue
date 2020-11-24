<template>
  <div
    :class="(line ? 'weui-loadmore_line' : '') + (dot ? ' weui-loadmore_dot' : '')"
    class="weui-loadmore"
  >
    <span class="weui-primary-loading" v-if="loading">
      <i class="weui-primary-loading__dot"></i>
    </span>
    <span class="weui-loadmore__tips">{{tip}}</span>
  </div>
</template>
<script>
export default {
  name: 'WeuiLoadmore',
  props: {
    tip: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    }
  }
}
</script>