import WeuiPanel from './src/panel'
import WeuiMedia from './src/media'
import WeuiMediaInfo from './src/media-info'
import WeuiMediaInfoMeta from './src/media-info-meta'

WeuiPanel.install = vue => {
  vue.component(WeuiPanel.name, WeuiPanel)
  vue.component(WeuiMedia.name, WeuiMedia)
  vue.component(WeuiMediaInfo.name, WeuiMediaInfo)
  vue.component(WeuiMediaInfoMeta.name, WeuiMediaInfoMeta)
}

export {
  WeuiPanel,
  WeuiMedia,
  WeuiMediaInfo,
  WeuiMediaInfoMeta
}