import WeuiTabbar from './src/tabbar'
import WeuiTabbarItem from './src/tabbar-item'

WeuiTabbar.install = vue => {
  vue.component(WeuiTabbar.name, WeuiTabbar)
  vue.component(WeuiTabbarItem.name, WeuiTabbarItem)
}

export {
  WeuiTabbar,
  WeuiTabbarItem
}