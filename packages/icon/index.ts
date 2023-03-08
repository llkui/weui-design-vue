import WeuiIcon from './src/icon.vue'

WeuiIcon.install = vue => {
  vue.component(WeuiIcon.name, WeuiIcon)
}

export { WeuiIcon }