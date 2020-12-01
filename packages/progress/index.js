import WeuiProgress from './src/progress'

WeuiProgress.install = vue => {
  vue.component(WeuiProgress.name, WeuiProgress)
}

export default WeuiProgress