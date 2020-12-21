<template>
  <div class="weui-form__tips-area">
    <p class="weui-form__tips">
      <template v-if="tipContent">{{ tipContent }}</template>
      <template v-else>
        <slot name="tipContent"></slot>
      </template>
    </p>
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