import WeuiExample from './src/example.vue'

WeuiExample.install = vue => {
  vue.component(WeuiExample.name, WeuiExample)
}

export default WeuiExample