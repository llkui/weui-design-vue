## badge

:::demo

```html
<template>
    <div class="page__bd">
      <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div>
      <div class="weui-cells">
          <div class="weui-cell weui-cell_active weui-cell_access">
              <div class="weui-cell__bd">单行列表</div>
              <div class="weui-cell__ft" style="font-size: 0;">
                  <span style="vertical-align: middle; font-size: 17px;">详细信息</span>
                  <weui-badge dot style="margin-left: 5px; margin-right: 5px;"></weui-badge>
              </div>
          </div>
      </div>
      <div class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="weui-cells">
          <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd" style="position: relative; margin-right: 10px;">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" style="width: 50px; display: block;">
                  <weui-badge style="position: absolute;top: -0.4em;right: -0.4em;">8</weui-badge>
              </div>
              <div class="weui-cell__bd">
                  <p>联系人名称</p>
                  <p style="font-size: 13px; color: #888;">摘要信息</p>
              </div>
          </div>
          <div class="weui-cell weui-cell_active weui-cell_access">
              <div class="weui-cell__bd">
                  <span style="vertical-align: middle;">单行列表</span>
                  <weui-badge style="margin-left: 5px;">8</weui-badge>
              </div>
              <div class="weui-cell__ft"></div>
          </div>
          <div class="weui-cell weui-cell_active weui-cell_access">
              <div class="weui-cell__bd">
                  <span style="vertical-align: middle;">单行列表</span>
                  <weui-badge style="margin-left: 5px;">8</weui-badge>
              </div>
              <div class="weui-cell__ft">详细信息</div>
          </div>
          <div class="weui-cell weui-cell_active weui-cell_access">
              <div class="weui-cell__bd">
                  <span style="vertical-align: middle;">单行列表</span>
                  <weui-badge style="margin-left: 5px;">new</weui-badge>
              </div>
              <div class="weui-cell__ft"></div>
          </div>
      </div>
  </div>
</template>

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| dot | 圆点 | boolean | true/false | false |
| style | 自定义样式 | string | - | - |