## panel

:::demo

```html
<template>
  <weui-panel :title="'图文组合列表'" is-link>
    <weui-media :img="img1" :title="'标题一'" :desc="'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'"></weui-media>
    <weui-media :img="img1" :title="'标题二'" :desc="'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'"></weui-media>
  </weui-panel>
  <weui-panel :title="'图文组合列表'" is-link>
    <weui-media :title="'标题一'" :desc="'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'"></weui-media>
    <weui-media :title="'标题二'" :desc="'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'"></weui-media>
  </weui-panel>
  <weui-panel :title="'小图文组合列表'">
    <weui-media cell>
      <weui-cell-group>
        <weui-cell :icon="img2" :title="'文字标题'" is-active is-link></weui-cell>
        <weui-cell :icon="img2" :title="'文字标题'" is-active is-link></weui-cell>
      </weui-cell-group>
    </weui-media>
  </weui-panel>
  <weui-panel :title="'文字列表附来源'">
    <weui-media :title="'标题一'" :desc="'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'">
      <template #info>
        <weui-media-info>
          <weui-media-info-meta :text="'文字来源'"></weui-media-info-meta>
          <weui-media-info-meta :text="'时间'"></weui-media-info-meta>
          <weui-media-info-meta :text="'其它信息'" :line="true"></weui-media-info-meta>
        </weui-media-info>
      </template>
    </weui-media>
  </weui-panel>
</template>
<script>
  export default {
    data() {
      return {
        img1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==',
        img2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=',
      }
    }
  }
</script>
```
:::

## Attributes

### panel

| 参数     | 说明         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| title    | 标题         | string  | —      | —      |
| is-link  | 查看更多     | boolean | —      | false  |
| linkText | 查看更多文本 | string  | —      | —      |

### media

| 参数  | 说明         | 类型    | 可选值 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| img   | 图片地址     | string  | —      | —      |
| title | 标题         | string  | —      | —      |
| desc  | 描述         | string  | —      | —      |
| info  | 详情         | slot    | —      | —      |
| cell  | 是否包含cell | boolean | —      | false  |

### media-info

详情，用于media的info

### media-info-meta

| 参数 | 说明               | 类型    | 可选值 | 默认值 |
| ---- | ------------------ | ------- | ------ | ------ |
| text | 文本               | string  | —      | —      |
| line | 是否显示左侧分割线 | boolean | —      | false  |

## Event

### panel

| 事件名称 | 说明             | 回调参数   |
| -------- | ---------------- | ---------- |
| onLink   | 链接点击事件回调 | function() |