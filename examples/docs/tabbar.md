## tabbar

:::demo

```html
<template>
  <weui-tabbar :selectedIndex.sync="selectedIndex">
    <weui-tabbar-item :icon="tabbar" label="微信"></weui-tabbar-item>
    <weui-tabbar-item :icon="tabbar" label="通讯录"></weui-tabbar-item>
    <weui-tabbar-item :icon="tabbar" label="发现"></weui-tabbar-item>
    <weui-tabbar-item :icon="tabbar" label="我"></weui-tabbar-item>
  </weui-tabbar-item>
</template>
<script>
  import tabbar from '../assets/icon_tabbar.png'
  export default {
    data() {
      return {
        tabbar: tabbar,
        selectedIndex: 1
      }
    }
  }
</script>
```

:::