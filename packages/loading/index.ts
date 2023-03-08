import WeuiLoading from './src/loading.vue'

WeuiLoading.install = vue => {
  vue.component(WeuiLoading.name, WeuiLoading)
}

export { WeuiLoading }