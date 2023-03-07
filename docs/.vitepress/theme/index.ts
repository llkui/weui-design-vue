// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import WeuiButton from '../../../packages/button'
import 'weui/dist/style/weui.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.use(WeuiButton)
  }
}
