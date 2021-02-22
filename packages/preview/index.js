import WeuiPreview from './src/preview'
import WeuiPreviewList from './src/list'
import WeuiPreviewItem from './src/item'
import WeuiPreviewButton from './src/button'

WeuiPreview.install = vue => {
  vue.component(WeuiPreview.name, WeuiPreview)
  vue.component(WeuiPreviewList.name, WeuiPreviewList)
  vue.component(WeuiPreviewItem.name, WeuiPreviewItem)
  vue.component(WeuiPreviewButton.name, WeuiPreviewButton)
}

export {
  WeuiPreview,
  WeuiPreviewList,
  WeuiPreviewItem,
  WeuiPreviewButton
}

export default WeuiPreview