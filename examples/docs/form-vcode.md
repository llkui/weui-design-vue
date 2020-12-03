## form

:::demo

```html
<template>
  <weui-form :title="'验证码'" :desc="'验证手机号样式'" >
    <weui-form-group :tips="'收不到验证码'">
      <weui-input placeholder="请输入手机号" label="手机号" type="number" pattern="[0-9]*" right-slot :maxlength="11">
        <a class="weui-btn_reset weui-btn_icon">
          <i id="showIOSDialog1" class="weui-icon-info-circle"></i>
        </a>
      </weui-input>
      <weui-input placeholder="请输入验证码" label="验证码" type="number" pattern="[0-9]*" right-slot :maxlength="6">
        <button class="weui-btn weui-btn_default weui-vcode-btn">获取验证码</button>
      </weui-input>
    </weui-form-group>
    <template #footer>
      <div class="weui-form__tips-area">
        <label id="weuiAgree" for="weuiAgreeCheckbox" class="weui-agree">
          <input id="weuiAgreeCheckbox" type="checkbox" class="weui-agree__checkbox"><span class="weui-agree__text">阅读并同意<a href="javascript:">《相关条款》</a>
          </span>
        </label>
      </div>
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
| tips | 提示 | string | -      | -      |

### input

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| label | 标签 | string | -      | -      |
| value | 当前输入的值 | string | - | - |
| type | 类型 | string | text/number | - |
| placeholder | 输入框为空时占位符 | string | - | - |
| readonly | 只读 | boolean | true/false | false |
| autofocus | 自动聚焦 | boolean | true/false | false |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | number | - | -1 |
