import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WeuiDesignVue from '../packages'
import DemoBlock from './components/DemoBlock.vue'
import './assets/css/common.scss' // 公共样式
import '../packages/weui.css' // weui样式
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);
import 'highlight.js/styles/monokai-sublime.css'

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

Vue.use(WeuiDesignVue)
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')