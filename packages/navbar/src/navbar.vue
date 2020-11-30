<template>
  <div class="weui-navbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WeuiNavbar',
  data() {
    return {
      curIndex: this.selectedIndex,
    }
  },
  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    selectedIndex: function (newVal) {
      this.curIndex = newVal
    },
    curIndex: function (newVal) {
      this.$emit('update:selectedIndex', newVal)
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      for (let i = 0; i < this.$children.length; i++) {
        this.$children[i].key = i
      }
      this.initSelected(this.curIndex)
    })
  },
  methods: {
    initSelected: function (selectedIndex) {
      this.$children.forEach((item) => (item.selected = false))
      if (this.$children.length > 0) {
        const index = this.$children.length > selectedIndex ? selectedIndex : 0
        this.$children[index].selected = true
      }
    },
    changeSelected: function (key) {
      if (this.curIndex !== key) {
        this.curIndex = key
        this.initSelected(this.curIndex)
      }
    },
  },
}
</script>