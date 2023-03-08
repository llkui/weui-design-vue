# Icon 图标

## icon

<div>
  <weui-icon></weui-icon>
  <weui-icon :type="'info'"></weui-icon>
  <weui-icon :type="'warn-primary'"></weui-icon>
  <weui-icon :type="'warn'"></weui-icon>
  <weui-icon :type="'waiting'"></weui-icon>
  <weui-icon :type="'info-circle'"></weui-icon>
</div>

<div>
  <weui-icon :mini="true"></weui-icon>
  <weui-icon :mini="true" :type="'info'"></weui-icon>
  <weui-icon :mini="true" :type="'warn-primary'"></weui-icon>
  <weui-icon :mini="true" :type="'warn'"></weui-icon>
  <weui-icon :mini="true" :type="'waiting'"></weui-icon>
  <weui-icon :mini="true" :type="'info-circle'"></weui-icon>
</div>

:::details
```vue
<div>
  <weui-icon></weui-icon>
  <weui-icon :type="'info'"></weui-icon>
  <weui-icon :type="'warn-primary'"></weui-icon>
  <weui-icon :type="'warn'"></weui-icon>
  <weui-icon :type="'waiting'"></weui-icon>
  <weui-icon :type="'info-circle'">
</div>
<div>
  <weui-icon :mini="true"></weui-icon>
  <weui-icon :mini="true" :type="'info'"></weui-icon>
  <weui-icon :mini="true" :type="'warn-primary'"></weui-icon>
  <weui-icon :mini="true" :type="'warn'"></weui-icon>
  <weui-icon :mini="true" :type="'waiting'"></weui-icon>
  <weui-icon :mini="true" :type="'info-circle'">
</div>
```
:::

## Attributes

| 参数 | 说明           | 类型    | 可选值                                                       | 默认值  |
| ---- | -------------- | ------- | ------------------------------------------------------------ | ------- |
| type | 类型           | string  | success / info / warn-primary / warn / waiting / info-circle | success |
| mini | 是否为mini状态 | boolean | —                                                            | false   |