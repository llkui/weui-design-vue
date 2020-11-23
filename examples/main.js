import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueWeui from '../packages'
import DemoBlock from './components/DemoBlock.vue'
import './assets/common.scss' // 公共样式
import './assets/weui.css' // weui样式
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

Vue.use(VueWeui)
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')