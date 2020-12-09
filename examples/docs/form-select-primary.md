## select

:::demo

```html
<template>
<weui-form :title="'模拟选择框'" :desc="'用于丰富原生选择框结构，使其更具有扩展性'">
  <weui-form-group>
    <weui-select-group :isPicker="true" :placement="'after'" :showHeader="false" @clickBody="showDate()">
      <template #body>{{date}}</template>
    </weui-select-group>
    <weui-select-group :label="value1.label" :isPicker="true" @clickHeader="showPhone()">
      <template #body>
        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码" value="12345678907">
      </template>
    </weui-select-group>
    <weui-select-group :label="'票种'" :isPicker="true" :placement="'after'" @clickBody="showPicker()">
      <template #body>{{value2.label}}</template>
    </weui-select-group>
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
        date: '日期',
        value1: { label: '+86', value: ''},
        value2: { label: '飞机票', value: ''},
      }
    },
    methods: {
      showDate: function() {
        const config = {
          title: '多列选择器',
          start: '2000-01-01',
          end: '2026-12-12',
          default: [2020, 12, 9]
        }
        this.$picker.showDate(config).then((res) => {
          this.date = res
        })
      },
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
          this.value2 = res[0];
        })
      }
    }
  }
</script>
```

:::
