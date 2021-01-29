import WeuiGrid from './src/grid'

WeuiGrid.install = vue => {
  vue.component(WeuiGrid.name, WeuiGrid)
}

export default WeuiGrid