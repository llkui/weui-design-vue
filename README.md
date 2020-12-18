## Features
A Mobile UI components based on `Weui Design` and `Vue`

## Install

```bash
$ npm install weui-design-vue --save
```

## Quickstart

in `src/main.js`

```bash
import Vue from 'vue'
import WeuiVue from 'weui-design-vue' +++
import 'weui-design-vue/lib/weui-design-vue.css' +++
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(WeuiVue) +++

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

## Environment Support

Modern browsers and `Android 4.4+` `iOS 8.0+`

## Links

- [Documentation](https://llkui.github.io/weui-design-vue/#/introduce)
- [Changelog](https://llkui.github.io/weui-design-vue/#/changelog)

## Development

```bash
$ git clone git@github.com:llkui/weui-design-vue.git
$ cd weui-design-vue
$ npm install
$ npm run serve
```

## Mobile example

![https://llkui.github.io/weui-design-vue-example](./examples/assets/qrcode.png)

## LICENSE

MIT