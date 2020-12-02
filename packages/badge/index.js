import WeuiBadge from './src/badge'

WeuiBadge.install = vue => {
  vue.component(WeuiBadge.name, WeuiBadge)
}

export default WeuiBadge