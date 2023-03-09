import WeuiSearchBar from './src/search-bar.vue'

WeuiSearchBar.install = vue => {
  vue.component(WeuiSearchBar.name, WeuiSearchBar)
}

export { WeuiSearchBar }