import WeuiButton from './src/button.vue'

WeuiButton.install = vue => {
  vue.component(WeuiButton.name, WeuiButton)
}

export default WeuiButton