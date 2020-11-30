## navbar

:::demo

```html
<template>
  <weui-navbar :selectedIndex.sync="selectedIndex">
    <weui-navbar-item title="选项一"></weui-navbar-item>
    <weui-navbar-item title="选项二"></weui-navbar-item>
    <weui-navbar-item title="选项三"></weui-navbar-item>
  </weui-navbar>
</template>
<script>
  export default {
    data() {
      return {
        selectedIndex: 1
      }
    }
  }
</script>
```

:::