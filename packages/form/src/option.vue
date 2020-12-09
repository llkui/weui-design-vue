<template>
  <option :selected="selected" :value="value">{{label}}</option>
</template>
<script>
export default {
  name: 'WeuiOption',
  data () {
    return {
      selected: this.$parent.value === this.value
    }
  },
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>