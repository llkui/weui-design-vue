import WeuiGrid from './src/grid'
import WeuiGridItem from './src/item'

WeuiGrid.install = vue => {
  vue.component(WeuiGrid.name, WeuiGrid)
  vue.component(WeuiGridItem.name, WeuiGridItem)
}

export {
  WeuiGrid,
  WeuiGridItem
}

export default WeuiGrid