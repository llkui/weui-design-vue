A Mobile UI components based on `Weui Design` and `Vue`

[![npm package](https://img.shields.io/npm/v/weui-design-vue.svg?style=flat-square)](https://www.npmjs.com/package/weui-design-vue) [![NPM downloads](http://img.shields.io/npm/dm/weui-design-vue.svg?style=flat-square)](http://www.npmtrends.com/weui-design-vue) [![Join the chat at https://gitter.im/weui-design-vue/community](https://img.shields.io/gitter/room/weui-design-vue/community.svg?style=flat-square)](https://gitter.im/weui-design-vue/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Features
- Support TS

## Install

```bash
$ npm install weui-design-vue --save
```

## Quickstart

in `src/main.js`

```bash
import Vue from 'vue'
import WeuiDesignVue from 'weui-design-vue' +++
import 'weui-design-vue/lib/weui-design-vue.css' +++
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(WeuiDesignVue) +++

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

![qrcode](https://llkui.github.io/weui-design-vue/static/qrcode.png)

[https://llkui.github.io/weui-design-vue-example](https://llkui.github.io/weui-design-vue-example)

## LICENSE

MIT