<template>
  <div
    @click="select()"
    class="weui-tabbar__item"
    :class="selected ? 'weui-bar__item_on' : ''"
  >
    <div style="display: inline-block; position: relative">
      <img :src="icon" alt="" class="weui-tabbar__icon" />
      <span
        v-if="count"
        class="weui-badge"
        style="position: absolute; top: -2px; right: -13px"
      >
        {{ count }}
      </span>
      <span
        v-if="dot"
        class="weui-badge weui-badge_dot"
        style="position: absolute; top: 0; right: -6px"
      ></span>
    </div>
    <p class="weui-tabbar__label">{{ label }}</p>
  </div>
</template>
<script>
export default {
  name: 'WeuiTabbarItem',
  data () {
    return {
      selected: false,
      key: null,
    }
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    count: {
      type: Number,
      default: null
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    select: function () {
      this.$parent.changeSelected(this.key)
    },
  },
}
</script>