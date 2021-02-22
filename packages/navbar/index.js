import WeuiNavbar from './src/navbar'

WeuiNavbar.install = vue => {
  vue.component(WeuiNavbar.name, WeuiNavbar)
}

export default WeuiNavbar