<template>
  <label @click.prevent="onClickLabel" class="weui-cell weui-cell_active weui-check__label">
    <div class="weui-cell__bd">
      <p>
        <slot></slot>
      </p>
    </div>
    <div class="weui-cell__ft">
      <input :name="name" :value="value" class="weui-check" type="radio" v-model="currentValue" />
      <span class="weui-icon-checked"></span>
    </div>
  </label>
</template>
<script>
export default {
  name: "WeuiRadio",
  data () {
    return {
      name: this.$parent.name
    }
  },
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  computed: {
    currentValue: {
      get () {
        return this.$parent.value
      },
      set (val) {
        this.$parent.$emit('input', val)
      }
    },
  },
  methods: {
    onClickLabel () {
      this.currentValue = this.value
    }
  }
};
</script>