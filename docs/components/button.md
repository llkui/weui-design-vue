# type

<weui-button :disabled="disabled" @click="ccc">页面主操作</weui-button>
<weui-button :type="'default'">页面次要操作</weui-button>
<weui-button :type="'warn'">警告类操作</weui-button>
<script setup lang="ts">
import { ref } from "vue"

let disabled = ref(false)
const ccc = () => {
  disabled.value = true
}
</script>

::: details 显示代码
```vue
<weui-button :disabled="disabled" @click="ccc">页面主操作</weui-button>
<weui-button :type="'default'">页面次要操作</weui-button>
<weui-button :type="'warn'">警告类操作</weui-button>
<script setup lang="ts">
import { ref } from "vue"

let disabled = ref(false)
const ccc = () => {
  disabled.value = true
}
</script>
```
:::

## Attributes

| 参数     | 说明                       | 类型    | 可选值                                | 默认值  |
| -------- | -------------------------- | ------- | ------------------------------------- | ------- |
| type     | 类型                       | string  | primary / default / warn / text(透明) | primary |
| loading  | 是否加载中状态             | boolean | —                                     | false   |
| disabled | 是否禁用状态               | boolean | —                                     | false   |
| block    | 是否为块级元素             | boolean | —                                     | false   |
| mini     | 是否为mini状态             | boolean | —                                     | false   |
| icon     | 按钮图标                   | string  | —                                     | —       |
| in-form  | 是否用于form内部(样式适应) | string  | —                                     | —       |

## Event

| 事件名称 | 说明         | 回调参数    |
| -------- | ------------ | ----------- |
| click    | 点击事件回调 | function(e) |