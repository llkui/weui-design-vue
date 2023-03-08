import WeuiGrid from './src/grid.vue'
import WeuiGridItem from './src/grid-item.vue'

WeuiGrid.install = vue => {
  vue.component(WeuiGrid.name, WeuiGrid)
  vue.component(WeuiGridItem.name, WeuiGridItem)
}

export {
  WeuiGrid,
  WeuiGridItem,
}