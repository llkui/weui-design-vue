import VwButton from './button'

// 所有组件列表
const components = [VwButton]
// 定义install方法，接受Vue作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 便利注册所有组件
  components.map(component => Vue.use(component))
}

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，不许具有install，才能使用Vue.use()
  ...components
}