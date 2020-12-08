<template>
  <div :class="inputClass">
    <div class="weui-cell__hd" v-if="label">
      <label class="weui-label">{{ label }}</label>
    </div>
    <div class="weui-cell__bd">
      <input
        :autofocus="autofocus"
        :maxlength="maxlength"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        class="weui-input"
        v-bind:value="value"
        v-on:input="input($event)"
      />
    </div>
    <div class="weui-cell__ft" v-if="rightSlot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiInput',
  data() {
    return {
      inputClass: '',
      curError: this.error,
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    pattern: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: -1,
    },
    error: {
      type: Boolean,
      default: false,
    },
    rightSlot: {
      type: Boolean,
      default: false,
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getClass()
    })
  },
  watch: {
    error: function (newVal) {
      this.curError = newVal
      this.getClass()
    },
    curError: function (newVal) {
      this.$emit('update:error', newVal)
    },
  },
  methods: {
    getClass: function () {
      let inputClass = 'weui-cell weui-cell_active'
      if (this.curError) {
        inputClass += ' weui-cell_warn'
      }
      if (this.readonly) {
        inputClass += ' weui-cell_readonly'
      }
      if (this.rightSlot) {
        inputClass += ' weui-cell_vcode'
      }
      this.inputClass = inputClass
    },
    input: function ($event) {
      if (this.curError) {
        this.curError = false
        this.getClass()
      }
      this.$emit('input', $event.target.value)
    },
  },
}
</script>