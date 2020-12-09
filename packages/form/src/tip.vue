<template>
  <div class="weui-form__tips-area">
    <p class="weui-form__tips" v-if="content">{{content}}</p>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: 'WeuiFormTip',
  props: {
    content: {
      type: String,
      default: null
    }
  }
}
</script>