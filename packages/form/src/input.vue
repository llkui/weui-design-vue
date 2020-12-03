<template>
  <div :class="inputClass">
    <div class="weui-cell__hd">
      <label class="weui-label"> {{ label }} </label>
    </div>
    <div class="weui-cell__bd">
      <input id="js_input" class="weui-input" :placeholder="placeholder" :type="type" :pattern="pattern" v-bind:value="value"
        :readonly="readonly" :maxlength="maxlength" :autofocus="autofocus" v-on:input="$emit('input', $event.target.value)"/>
    </div>
    <div class="weui-cell__ft" v-if="rightSlot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeuiInput",
  data () {
    return {
      inputClass: ''
    }
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    value:  {
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
    pattern:  {
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
    rightSlot: {
      type: Boolean,
      default: false,
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      let inputClass = 'weui-cell weui-cell_active';
      if (this.readonly) {
        inputClass += 'weui-cell_readonly'
      }
      if (this.rightSlot) {
        inputClass += 'weui-cell_vcode'
      }
      this.inputClass = inputClass
    })
  }
};
</script>