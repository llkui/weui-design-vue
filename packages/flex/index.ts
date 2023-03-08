import WeuiFlex from './src/flex.vue'
import WeuiFlexItem from './src/flex-item.vue'

WeuiFlex.install = vue => {
  vue.component(WeuiFlex.name, WeuiFlex)
  vue.component(WeuiFlexItem.name, WeuiFlexItem)
}

export {
  WeuiFlex,
  WeuiFlexItem
}