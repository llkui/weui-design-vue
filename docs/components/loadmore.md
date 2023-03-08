# Loadmore 加载更多

## tip

<weui-loadmore :tip="'正在加载'"></weui-loadmore>

:::details
```vue
<weui-loadmore :tip="'正在加载'"></weui-loadmore>
```
:::

## loading

<weui-loadmore :tip="'正在加载'" :loading="true"></weui-loadmore>

:::details
```vue
<weui-loadmore :tip="'正在加载'" :loading="true"></weui-loadmore>
```
:::

## line

<weui-loadmore :tip="'暂无数据'" :line="true"></weui-loadmore>

:::details
```vue
<weui-loadmore :tip="'暂无数据'" :line="true"></weui-loadmore>
```
:::

## dot

<weui-loadmore :line="true" :dot="true"></weui-loadmore>

:::details
```vue
<weui-loadmore :line="true" :dot="true"></weui-loadmore>
```
:::

## Attributes

| 参数    | 说明           | 类型    | 可选值 | 默认值 |
| ------- | -------------- | ------- | ------ | ------ |
| tip     | 提示内容       | string  | —      | —      |
| loading | 是否加载中     | boolean | —      | false  |
| line    | 是否显示分割线 | boolean | —      | false  |
| dot     | 是否显示圆点   | boolean | —      | false  |