## preview

:::demo

```html
<weui-preview label="付款金额" value="付款金额">
  <weui-preview-item label="商品" value="电动打蛋机"></weui-preview-item>
  <weui-preview-item label="标题标题" value="名字名字名字"></weui-preview-item>
  <weui-preview-item label="标题标题" value="很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"></weui-preview-item>
  <template #footer>
    <weui-preview-button :type="'default'">辅助操作</weui-preview-button>
    <weui-preview-button>操作</weui-preview-button>
  </template>
</weui-preview>
```
:::

## Attributes

### preview

| 参数   | 说明         | 类型   | 可选值 | 默认值 |
| ------ | ------------ | ------ | ------ | ------ |
| label  | 标签         | string | -      | -      |
| value  | 内容         | string | -      | -      |
| footer | 底部操作区域 | slot   | -      | -      |

### preview-item

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| label | 标签 | string | -      | -      |
| value | 内容 | string | -      | -      |

### preview-button

| 参数 | 说明 | 类型   | 可选值            | 默认值  |
| ---- | ---- | ------ | ----------------- | ------- |
| type | 类型 | string | primary / default | primary |

## Event

### preview-button

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| onClick  | 点击事件回调 | function() |
