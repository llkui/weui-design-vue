<template>
  <div
    @click="select()"
    class="weui-tabbar__item"
    :class="selected ? 'weui-bar__item_on' : ''"
  >
    <div style="display: inline-block; position: relative">
      <img :src="icon" alt="" class="weui-tabbar__icon" />
    </div>
    <p class="weui-tabbar__label">{{ label }}</p>
  </div>
</template>
<script>
export default {
  name: 'WeuiTabbarItem',
  data() {
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
  },
  methods: {
    select: function () {
      this.$parent.changeSelected(this.key)
    },
  },
}
</script>