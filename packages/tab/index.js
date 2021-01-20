import WeuiTab from './src/tab'
import WeuiTabPanel from './src/tab-panel'


WeuiTab.install = vue => {
  vue.component(WeuiTab.name, WeuiTab)
  vue.component(WeuiTabPanel.name, WeuiTabPanel)
}

export {
  WeuiTab,
  WeuiTabPanel
}

export default WeuiTab