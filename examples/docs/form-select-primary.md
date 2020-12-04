## select

:::demo

```html
<template>
<weui-form :title="'模拟选择框'" :desc="'用于丰富原生选择框结构，使其更具有扩展性'">
  <weui-form-group>
    <div class="weui-cell weui-cell_active weui-cell_access weui-cell_select weui-cell_select-before">
      <div class="weui-cell__hd" id="showPhone" @click="showPhone()"><label class="weui-label"> {{value1.label}} </label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码" value="12345678907">
      </div>
    </div>
    <div class="weui-cell weui-cell_active weui-cell_access weui-cell_select weui-cell_select-after">
      <div class="weui-cell__hd"><label class="weui-label">票种</label></div>
      <div class="weui-cell__bd" id="showPicker" @click="showPicker()"> {{value2.label}} </div>
    </div>
  </weui-form-group>
</weui-form>
<weui-picker :show="visible" :options="options" :selectedI="5"></weui-picker>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        options: [],
        value1: { label: '+86', value: ''},
        value2: { label: '飞机票', value: ''},
      }
    },
    methods: {
      showPhone: function() {
        this.options = [
          { label: '+86', value: '1', disabled: false },
          { label: '+80', value: '2', disabled: false },
          { label: '+84', value: '3', disabled: false },
          { label: '+87', value: '4', disabled: false },
        ]
        const config = {
          options: this.options,
          default: 0
        }
        this.$picker.show(config).then((res) => {
          this.value1 = res;
        })
      },
      showPicker: function() {
        this.options = [
          { label: '飞机票', value: '1', disabled: false },
          { label: '火车票', value: '2', disabled: false },
          { label: '的士票', value: '3', disabled: false },
          { label: '公交票(disabled)', value: '4', disabled: true },
          { label: '其他(disabled)', value: '5', disabled: true },
          { label: '好的(disabled)', value: '6', disabled: true },
        ]
        const config = {
          options: this.options,
          default: 0
        }
        this.$picker.show(config).then((res) => {
          this.value2 = res;
        })
      }
    }
  }
</script>
```

:::
