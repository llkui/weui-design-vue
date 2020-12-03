## form

:::demo

```html
<template>
  <weui-form :title="'输入框状态'" :desc="'可体验表单输入样式，当输入位数不等于16位的时候点击按钮可看到报错样式。'" >
    <weui-form-group :title="'表单报错'">
      <weui-input :placeholder="'请输入16位数卡号'" :label="'卡号'" :maxlength="16" autofocus></weui-input>
    </weui-form-group>
    <weui-form-group :title="'表单只读、置灰'">
      <weui-input :placeholder="'1234567'" :label="'EMail'" readonly></weui-input>
      <weui-input :placeholder="'WeUI'" :label="'微信号'" readonly></weui-input>
    </weui-form-group>
    <template #footer>
      <div class="weui-form__opr-area">
        <a class="weui-btn weui-btn_primary weui-btn_disabled" href="javascript:" id="showTooltips">确定</a>
      </div>
    </template>
  </weui-form>
</template>
```

:::

## Attributes

### form

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | -      | -      |
| desc | 描述 | string | -      | -      |

### form-group

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | -      | -      |

### input

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| label | 标签 | string | -      | -      |
| value | 当前输入的值 | string | - | - |
| type | 类型 | string | text/number | - |
| placeholder | 输入框为空时占位符 | string | - | - |
| readonly | 只读 | boolean | true/false | false |
| autofocus | 自动聚焦 | boolean | true/false | false |