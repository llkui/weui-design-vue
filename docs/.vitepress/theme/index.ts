// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import WeuiDesignVue from '../../../packages'
import 'weui/dist/style/weui.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.use(WeuiDesignVue)
  }
}
