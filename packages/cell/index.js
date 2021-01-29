import WeuiCell from './src/cell'

WeuiCell.install = vue => {
  vue.component(WeuiCell.name, WeuiCell)
}

export default WeuiCell