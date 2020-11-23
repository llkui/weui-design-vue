## type

:::demo type: 默认primary

```html
<weui-button>页面主操作</weui-button>
<weui-button :type="'default'">页面次要操作</weui-button>
<weui-button :type="'warn'">警告类操作</weui-button>
```

:::

## loading

:::demo loading: 默认false

```html
<weui-button :loading="true">页面主操作</weui-button>
<weui-button :type="'default'" :loading="true">页面次要操作</weui-button>
<weui-button :type="'warn'" :loading="true">警告类操作</weui-button>
```

:::

## disabled

:::demo disabled: 默认false

```html
<weui-button :disabled="true">页面主操作</weui-button>
<weui-button :type="'default'" :disabled="true">页面次要操作</weui-button>
<weui-button :type="'warn'" :disabled="true">警告类操作</weui-button>
```

:::

## block

:::demo block: 默认false

```html
<weui-button :block="true">强调行按钮</weui-button>
<weui-button :block="true" :type="'default'">普通行按钮</weui-button>
<weui-button :block="true" :icon="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='">强调行按钮</weui-button>
<weui-button :block="true" :type="'warn'">警告行按钮</weui-button>
```

:::

## mini

:::demo mini: 默认false

```html
<div>
  <weui-button :mini="true">按钮</weui-button>
  <weui-button :mini="true" :type="'default'">按钮</weui-button>
  <weui-button :mini="true" :type="'warn'">按钮</weui-button>
</div>
<div>
  <weui-button :block="true" :mini="true">按钮</weui-button>
  <weui-button :block="true" :mini="true" :type="'default'">按钮</weui-button>
  <weui-button :block="true" :mini="true" :type="'warn'">按钮</weui-button>
</div>
```

:::
