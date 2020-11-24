import WeuiLoading from './src/loading'

WeuiLoading.install = vue => {
  vue.component(WeuiLoading.name, WeuiLoading)
}

export default WeuiLoading