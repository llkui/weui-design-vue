import WeuiCell from './src/cell.vue'
import WeuiCellGroup from './src/cell-group.vue'

WeuiCell.install = vue => {
  vue.component(WeuiCell.name, WeuiCell)
  vue.component(WeuiCellGroup.name, WeuiCellGroup)
}

export {
  WeuiCell,
  WeuiCellGroup
}