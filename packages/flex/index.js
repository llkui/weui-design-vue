import WeuiFlex from './src/flex'
import WeuiFlexItem from './src/item'

WeuiFlex.install = vue => {
  vue.component(WeuiFlex.name, WeuiFlex)
  vue.component(WeuiFlexItem.name, WeuiFlexItem)
}

export {
  WeuiFlex,
  WeuiFlexItem
}