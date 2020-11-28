import WeuiArticle from './src/article'

WeuiArticle.install = vue => {
  vue.component(WeuiArticle.name, WeuiArticle)
}

export default WeuiArticle