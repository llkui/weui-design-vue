## search-bar

<weui-search-bar v-model="value" @input="input()"></weui-search-bar>
<script setup lang="ts">
import { ref } from "vue"

const value = ref("")

const input = () => {
  console.log(value)
}
</script>

:::details

```html
<weui-search-bar v-model="value" @input="input()"></weui-search-bar>
<script setup lang="ts">
import { ref } from "vue"

const value = ref("")

const input = () => {
  console.log(value)
}
</script>
```

:::

## Attribute

| 参数           | 说明     | 类型   | 可选值 | 默认值 |
| -------------- | -------- | ------ | ------ | ------ |
| value(v-model) | 搜索内容 | string | —      | —      |