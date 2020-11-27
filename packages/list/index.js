import WeuiCellList from './src/list'
import WeuiCell from './src/cell'

WeuiCellList.install = vue => {
  vue.component(WeuiCellList.name, WeuiCellList)
  vue.component(WeuiCell.name, WeuiCell)
}

export {
  WeuiCellList,
  WeuiCell
}