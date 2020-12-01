## preview

:::demo

```html
<weui-preview label="付款金额" value="付款金额">
  <weui-preview-item label="商品" value="电动打蛋机"></weui-preview-item>
  <weui-preview-item label="标题标题" value="名字名字名字"></weui-preview-item>
  <weui-preview-item label="标题标题" value="很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"></weui-preview-item>
  <template #footer>
    <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">辅助操作</a>
    <a class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</a>
  </template>
</weui-preview>
```
:::

## Attributes

### preview

| 参数  | 说明 | 类型    | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| label | 标签 | string | -      | -      |
| value | 内容 | string | -      | -      |

### preview-item

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| label | 标签 | string | -      | -      |
| value | 内容 | string | -      | -      |