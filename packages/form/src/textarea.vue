<template>
  <div>
    <textarea
      class="weui-textarea"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :rows="rows"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    ></textarea>
    <div class="weui-textarea-counter" v-if="showCount">
      <span>{{ value.length }}</span>
      /{{ maxlength }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiTextarea',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
    placeholder: String,
    rows: Number,
    maxlength: {
      type: Number,
      default: 200,
    },
    showCount: {
      type: Boolean,
      default: true,
    },
  },
}
</script>