## select

:::demo

```html
<template>
  <weui-form :title="'原生选择框'">
    <weui-form-group>
      <weui-select :name="'type'" v-model="type" @input="show('type')">
        <weui-option value="1" label="微信号"></weui-option>
        <weui-option value="2" label="QQ号"></weui-option>
        <weui-option value="3" label="Email"></weui-option>
      </weui-select>
      <weui-select-group>
        <template #header>
          <select class="weui-select" name="select2">
            <option value="1">+86</option>
            <option value="2">+80</option>
            <option value="3">+84</option>
            <option value="4">+87</option>
          </select>
        </template>
        <template #body>
          <input
            class="weui-input"
            type="number"
            pattern="[0-9]*"
            placeholder="请输入号码"
            value="12345678907"
          />
        </template>
      </weui-select-group>
      <weui-select :name="'country'" :label="'国家'" v-model="country" @input="show('country')">
        <weui-option value="1" label="中国"></weui-option>
        <weui-option value="2" label="美国"></weui-option>
        <weui-option value="3" label="英国"></weui-option>
      </weui-select>
    </weui-form-group>
  </weui-form>
</template>
<script>
  export default {
    data() {
      return {
        type: '2',
        country: '3'
      }
    },
    methods: {
      show: function(key) {
        console.log(this[key])
      }
    }
  }
</script>
```

:::

## Attributes

### select

| 参数           | 说明           | 类型   | 可选值 | 默认值 |
| -------------- | -------------- | ------ | ------ | ------ |
| name           | 下拉列表的名称 | string | —      | —      |
| label          | 标签名         | string | —      | —      |
| value(v-model) | 当前选中的值   | string | —      | —      |

### option

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| label | 标签名   | string | —      | —      |
| value | 选项的值 | string | —      | —      |

### select-group

| 参数       | 说明                       | 类型    | 可选值         | 默认值 |
| ---------- | -------------------------- | ------- | -------------- | ------ |
| label      | 标签名                     | string  | —              | —      |
| isPicker   | 是否包含模拟选择框(picker) | string  | —              | —      |
| placement  | select所在位置             | string  | before / after | —      |
| header     | 右边区域内容               | slot    | —              | —      |
| showHeader | 是否显示右边区域           | boolean | —              | true   |
| body       | 中间区域内容               | slot    | —              | —      |