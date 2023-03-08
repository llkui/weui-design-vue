import WeuiArticle from './src/article.vue'

WeuiArticle.install = vue => {
  vue.component(WeuiArticle.name, WeuiArticle)
}

export { WeuiArticle }