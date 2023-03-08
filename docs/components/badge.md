# Badge 徽章

## badge

<weui-cell-group :title="'新消息提示跟摘要信息后，统一在列表右侧'">
  <weui-cell :title="'单行列表'" is-link is-active>
    <template #value>
      <div style="font-size: 0;">
        <span style="vertical-align: middle; font-size: 17px;">详细信息</span>
        <weui-badge dot style="margin-left: 5px; margin-right: 5px;"></weui-badge>
      </div>
    </template>
  </weui-cell>
</weui-cell-group>
<weui-cell-group :title="'未读数红点跟在主题信息后，统一在列表左侧'">
  <weui-cell is-active>
    <template #label>
      <div style="position: relative; margin-right: 10px;">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" style="width: 50px; display: block;">
        <weui-badge styleSet="position: absolute;top: -0.4em;right: -0.4em;">8</weui-badge>
      </div>
    </template>
    <template #title>
      <p>联系人名称</p>
      <p style="font-size: 13px; color: #888;">摘要信息</p>
    </template>
  </weui-cell>
  <weui-cell is-active is-link>
    <template #title>
      <span style="vertical-align: middle;">单行列表</span>
      <weui-badge styleSet="margin-left: 5px;">8</weui-badge>
    </template>
  </weui-cell>
  <weui-cell is-active is-link :value="'详细信息'">
    <template #title>
      <span style="vertical-align: middle;">单行列表</span>
      <weui-badge styleSet="margin-left: 5px;">8</weui-badge>
    </template>
  </weui-cell>
  <weui-cell is-active is-link>
    <template #title>
      <span style="vertical-align: middle;">单行列表</span>
      <weui-badge styleSet="'margin-left: 5px;'">new</weui-badge>
    </template>
  </weui-cell>
</weui-cell-group>

:::details
```vue
<weui-cell-group :title="'新消息提示跟摘要信息后，统一在列表右侧'">
  <weui-cell :title="'单行列表'" is-link is-active>
    <template #value>
      <div style="font-size: 0;">
        <span style="vertical-align: middle; font-size: 17px;">详细信息</span>
        <weui-badge dot style="margin-left: 5px; margin-right: 5px;"></weui-badge>
      </div>
    </template>
  </weui-cell>
</weui-cell-group>
<weui-cell-group :title="'未读数红点跟在主题信息后，统一在列表左侧'">
  <weui-cell is-active>
    <template #label>
      <div style="position: relative; margin-right: 10px;">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" style="width: 50px; display: block;">
        <weui-badge styleSet="position: absolute;top: -0.4em;right: -0.4em;">8</weui-badge>
      </div>
    </template>
    <template #title>
      <p>联系人名称</p>
      <p style="font-size: 13px; color: #888;">摘要信息</p>
    </template>
  </weui-cell>
  <weui-cell is-active is-link>
    <template #title>
      <span style="vertical-align: middle;">单行列表</span>
      <weui-badge styleSet="margin-left: 5px;">8</weui-badge>
    </template>
  </weui-cell>
  <weui-cell is-active is-link :value="'详细信息'">
    <template #title>
      <span style="vertical-align: middle;">单行列表</span>
      <weui-badge styleSet="margin-left: 5px;">8</weui-badge>
    </template>
  </weui-cell>
  <weui-cell is-active is-link>
    <template #title>
      <span style="vertical-align: middle;">单行列表</span>
      <weui-badge styleSet="'margin-left: 5px;'">new</weui-badge>
    </template>
  </weui-cell>
</weui-cell-group>
```
:::

## Attributes

| 参数     | 说明       | 类型    | 可选值 | 默认值 |
| -------- | ---------- | ------- | ------ | ------ |
| dot      | 圆点       | boolean | —      | false  |
| styleSet | 自定义样式 | string  | —      | —      |