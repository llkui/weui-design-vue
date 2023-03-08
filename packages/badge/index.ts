import WeuiBadge from './src/badge.vue'

WeuiBadge.install = vue => {
  vue.component(WeuiBadge.name, WeuiBadge)
}

export { WeuiBadge }