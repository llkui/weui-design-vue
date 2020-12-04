<template>
  <label class="weui-cell weui-cell_active weui-check__label" :for="id" @click.prevent="onClickLabel">
      <div class="weui-cell__bd">
        <p><slot></slot></p>
      </div>
      <div class="weui-cell__ft">
        <input type="radio" class="weui-check" :name="name" :id="id" :value="value" v-model="currentValue"/>
        <span class="weui-icon-checked"></span>
      </div>
    </label>
</template>
<script>
export default {
  name: "WeuiRadio",
  data () {
    return {
      name: this.$parent.name,
      checked: false
    }
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    value:  {
      type: String,
      default: null,
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.$parent.value
      },

      set(val) {
        this.$parent.$emit('input', val);
      }
    },
  },
  methods: {
    onClickLabel() {
      this.currentValue = this.value;
    }
  }
};
</script>