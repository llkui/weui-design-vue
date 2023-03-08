import WeuiLoadmore from './src/loadmore.vue'

WeuiLoadmore.install = vue => {
  vue.component(WeuiLoadmore.name, WeuiLoadmore)
}

export { WeuiLoadmore }