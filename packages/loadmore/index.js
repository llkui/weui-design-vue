import WeuiLoadmore from './src/loadmore'

WeuiLoadmore.install = vue => {
  vue.component(WeuiLoadmore.name, WeuiLoadmore)
}

export default WeuiLoadmore