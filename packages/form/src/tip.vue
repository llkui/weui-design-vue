<template>
  <div class="weui-form__tips-area">
    <p class="weui-form__tips" v-if="tipContent">{{ tipContent }}</p>
    <p class="weui-form__tips" v-else-if="content">{{ content }}</p>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: 'WeuiFormTip',
  props: {
    tipContent: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
  }
}
</script>