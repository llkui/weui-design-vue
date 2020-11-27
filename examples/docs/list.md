

## cell-list and cell

:::demo

```html
<weui-cell-list>
  <weui-cell :title="'标题文字'" :label="'说明文字'"></weui-cell>
  <weui-cell :title="'标题文字'" :label="'说明文字'" is-swipe></weui-cell>
</weui-cell-list>
```

:::

## icon

:::demo

```html
<weui-cell-list>
  <weui-cell :title="'标题文字'" :label="'说明文字'" :icon="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='"></weui-cell>
  <weui-cell :title="'标题文字'" :label="'说明文字'" :icon="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='"></weui-cell>
</weui-cell-list>
```
:::

## link

:::demo

```html
<weui-cell-list>
  <weui-cell :title="'标题文字'" :label="'说明文字'" is-link></weui-cell>
  <weui-cell :title="'标题文字'" :label="'说明文字'" is-link></weui-cell>
</weui-cell-list>
```


<script>
  import tabbar from '../assets/icon_tabbar.png'
  export default {
    data() {
      return {
        tabbar: tabbar
      }
    }
  }
</script>

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| icon | 图标 | string | -      | -      |
| is-link | 可跳转 | boolean | true/false | false |
| is-swipe | 可滑动 | boolean | true/false | false |
