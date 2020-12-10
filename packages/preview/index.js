import WeuiPreview from './src/preview'
import WeuiPreviewItem from './src/item'
import WeuiPreviewButton from './src/button'

WeuiPreview.install = vue => {
  vue.component(WeuiPreview.name, WeuiPreview)
  vue.component(WeuiPreviewItem.name, WeuiPreviewItem)
  vue.component(WeuiPreviewButton.name, WeuiPreviewButton)
}

export {
  WeuiPreview,
  WeuiPreviewItem,
  WeuiPreviewButton
}