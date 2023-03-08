import WeuiButton from './button'
import WeuiArticle from './article'

// 所有组件列表
const components = [
  WeuiButton,
  WeuiArticle,
]
// 定义install方法，接受Vue作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if ((install as any).installed) return
  (install as any).installed = true
  // 遍历注册所有组件
  components.map(component => Vue.use(component))
}

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  install,
  ...components
}

export {
  WeuiButton,
  WeuiArticle,
} 