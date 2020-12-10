import WeuiCellGroupTitle from './src/group-title'
import WeuiCellGroup from './src/group'
import WeuiCell from './src/cell'

WeuiCellGroup.install = vue => {
  vue.component(WeuiCellGroupTitle.name, WeuiCellGroupTitle)
  vue.component(WeuiCellGroup.name, WeuiCellGroup)
  vue.component(WeuiCell.name, WeuiCell)
}

export {
  WeuiCellGroupTitle,
  WeuiCellGroup,
  WeuiCell
}