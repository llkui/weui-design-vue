import { createApp } from 'vue'
import WeuiDesignVue from './../packages/index'
import './../packages/weui.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(WeuiDesignVue)
app.mount('#app')
