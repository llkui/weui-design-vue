

## cell-group and cell

:::demo

```html
<template>
  <weui-cell-group>
    <weui-cell :title="'标题文字'" :value="'说明文字'" @click="clickCell()"></weui-cell>
    <weui-cell :title="'标题文字'" :value="'说明文字'" is-swipe @clickBtn="clickBtn()"></weui-cell>
  </weui-cell-group>
</template>
<script>
  export default {
    methods: {
      clickCell: function() {
        console.log('click-cell')
      },
      clickBtn: function() {
        console.log('click-btn')
      }
    }
  }
</script>
```

:::

## icon

:::demo

```html
<weui-cell-group>
  <weui-cell :title="'标题文字'" :value="'说明文字'" :icon="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='"></weui-cell>
  <weui-cell :title="'标题文字'" :value="'说明文字'" :icon="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='"></weui-cell>
</weui-cell-group>
```
:::

## link

:::demo

```html
<weui-cell-group>
  <weui-cell :title="'标题文字'" :value="'说明文字'" is-link></weui-cell>
  <weui-cell :title="'标题文字'" :value="'说明文字'" is-link></weui-cell>
</weui-cell-group>
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

### cell-group

单元格组合标题

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | —      | —      |

### cell-group

cell-group可以为cell提供外边框

### cell

| 参数      | 说明               | 类型          | 可选值 | 默认值 |
| --------- | ------------------ | ------------- | ------ | ------ |
| label     | 标签内容           | slot          | —      | —      |
| title     | 标题               | string / slot | —      | —      |
| value     | 内容               | string / slot | —      | —      |
| icon      | 图标               | string        | —      | —      |
| is-link   | 可跳转             | boolean       | —      | false  |
| is-active | 是否包含选中后效果 | boolean       | —      | false  |
| is-swipe  | 可滑动             | boolean       | —      | false  |
| swipeText | 滑动按钮文本       | string        | —      | 删除   |

## Event

| 事件名称 | 说明             | 回调参数   |
| -------- | ---------------- | ---------- |
| click    | 单元格点击回调   | function() |
| clickBtn | 滑动按钮点击回调 | function() |