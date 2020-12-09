<template>
  <div
    :class="label ? 'weui-cell_select-after' : ''"
    class="weui-cell weui-cell_active weui-cell_select"
  >
    <div class="weui-cell__hd" v-if="label">
      <label class="weui-label">{{label}}</label>
    </div>
    <div class="weui-cell__bd">
      <select :name="name" class="weui-select" v-on:change="$emit('input', $event.target.value)">
        <slot></slot>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeuiSelect',
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  }
}
</script>