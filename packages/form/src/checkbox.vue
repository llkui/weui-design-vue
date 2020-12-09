<template>
  <label class="weui-cell weui-cell_active weui-check__label" :for="id" @click.prevent="onClickLabel">
    <div class="weui-cell__hd">
      <input
        :id="id"
        type="checkbox"
        class="weui-check"
        :name="name"
        :checked="isChecked"
      />
      <i class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd">
      <p><slot></slot></p>
    </div>
  </label>
</template>
<script>
export default {
  name: "WeuiCheckbox",
  data () {
    return {
      name: this.$parent.name,
    }
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    value:  {
      type: [String, Number],
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.$parent.value.findIndex(item => item == this.value) !== -1
      },

      set(val) {
        const parentValue = this.$parent.value.slice();
          if (val) {
            if (parentValue.findIndex(item => item == this.value) === -1) {
              parentValue.push(this.value);
              this.$parent.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.findIndex(item => item == this.value);
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.$parent.$emit('input', parentValue);
            }
          }
      }
    },
    isChecked() {
      if ({}.toString.call(this.currentValue) === '[object Boolean]') {
        return this.currentValue;
      } else if (this.currentValue !== undefined && this.currentValue !== null ) {
        return this.currentValue === this.value;
      } else {
        return false
      }
    },
  },
  methods: {
    onClickLabel() {
      this.currentValue = !this.currentValue;
    }
  }
};
</script>