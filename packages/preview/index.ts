import WeuiPreview from './src/preview.vue'
import WeuiPreviewItem from './src/preview-item.vue'
import WeuiPreviewButton from './src/preview-button.vue'

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