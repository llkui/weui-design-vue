import WeuiPanel from './src/panel'

WeuiPanel.install = vue => {
  vue.component(WeuiPanel.name, WeuiPanel)
}

export default WeuiPanel