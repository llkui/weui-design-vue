import WeuiNavbar from './src/navbar'
import WeuiNavbarItem from './src/navbar-item'

WeuiNavbar.install = vue => {
  vue.component(WeuiNavbar.name, WeuiNavbar)
  vue.component(WeuiNavbarItem.name, WeuiNavbarItem)
}

export {
  WeuiNavbar,
  WeuiNavbarItem
}