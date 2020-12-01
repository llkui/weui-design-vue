import WeuiPreview from './src/preview'
import WeuiPreviewItem from './src/item'

WeuiPreview.install = vue => {
  vue.component(WeuiPreview.name, WeuiPreview)
  vue.component(WeuiPreviewItem.name, WeuiPreviewItem)
}

export {
  WeuiPreview,
  WeuiPreviewItem
}