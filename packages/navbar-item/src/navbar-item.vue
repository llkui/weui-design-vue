<template>
  <div
    @click="select()"
    class="weui-navbar__item"
    :class="selected ? 'weui-bar__item_on' : ''"
  >
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'WeuiNavbarItem',
  data() {
    return {
      selected: false,
      key: null,
    }
  },
  props: {
    title: {
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