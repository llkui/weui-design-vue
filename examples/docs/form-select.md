## select

:::demo

```html
<template>
  <weui-form :title="'原生选择框'">
    <weui-form-group>
      <div class="weui-cell weui-cell_active weui-cell_select">
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1">
            <option selected="" value="1">微信号</option>
            <option value="2">QQ号</option>
            <option value="3">Email</option>
          </select>
        </div>
      </div>
      <div
        class="weui-cell weui-cell_active weui-cell_select weui-cell_select-before"
      >
        <div class="weui-cell__hd">
          <select class="weui-select" name="select2">
            <option value="1">+86</option>
            <option value="2">+80</option>
            <option value="3">+84</option>
            <option value="4">+87</option>
          </select>
        </div>
        <div class="weui-cell__bd">
          <input
            class="weui-input"
            type="number"
            pattern="[0-9]*"
            placeholder="请输入号码"
            value="12345678907"
          />
        </div>
      </div>
      <div
        class="weui-cell weui-cell_active weui-cell_select weui-cell_select-after"
      >
        <div class="weui-cell__hd">
          <label for="" class="weui-label">国家</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
            <option value="1">中国</option>
            <option value="2">美国</option>
            <option value="3">英国</option>
          </select>
        </div>
      </div>
    </weui-form-group>
  </weui-form>
</template>
```

:::
