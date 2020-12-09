<template>
  <label :class="curAnimate ? 'weui-agree_animate' : ''" class="weui-agree" for="weuiAgreeCheckbox">
    <input
      class="weui-agree__checkbox"
      id="weuiAgreeCheckbox"
      type="checkbox"
      v-bind:checked="value"
      v-on:change="$emit('input', $event.target.checked)"
    />
    <span class="weui-agree__text">
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'WeuiCheckboxAgree',
  data () {
    return {
      agreeClass: '',
      curAnimate: this.animate
    }
  },
  watch: {
    animate: function (newVal) {
      this.curAnimate = newVal
      if (this.curAnimate) {
        setTimeout(() => {
          this.curAnimate = false
        }, 300)
      }
    },
    curAnimate: function (newVal) {
      this.$emit('update:animate', newVal)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: false
    }
  }
}
</script>