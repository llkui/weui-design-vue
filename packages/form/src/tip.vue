<template>
  <div class="weui-form__tips-area">
    <p class="weui-form__tips">{{value}}</p>
  </div>
</template>
<script>
export default {
  name: 'WeuiFormTip',
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>