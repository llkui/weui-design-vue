// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import WeuiExample from '../../example'
import WeuiDesignVue from '../../../packages'
import 'weui/dist/style/weui.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.use(WeuiExample)
    ctx.app.use(WeuiDesignVue)
  }
}
