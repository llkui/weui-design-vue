import WeuiButton from './button'
import {
  WeuiCellList,
  WeuiCell
} from './list'
import {
  WeuiFlex,
  WeuiFlexItem
} from './flex'
import {
  WeuiFooter,
  WeuiFooterText,
  WeuiFooterLinks,
  WeuiFooterLink
} from './footer'
import Gallery from './gallery'
import WeuiIcon from './icon'
import WeuiLoadmore from './loadmore'
import WeuiLoading from './loading'
import WeuiDialog from './dialog'
import {
  WeuiGrid,
  WeuiGridItem
} from './grid'
import WeuiTopTips from './toptips'
import WeuiToast from './toast'
import WeuiActionSheet from './action-sheet'
import {
  WeuiMsg,
  WeuiMsgFooterLink
} from './msg'
import WeuiArticle from './article'
import {
  WeuiTabbar,
  WeuiTabbarItem
} from './tabbar'

// 所有组件列表
const components = [
  WeuiButton,
  WeuiCellList,
  WeuiCell,
  WeuiFlex,
  WeuiFlexItem,
  WeuiFooter,
  Gallery,
  WeuiFooterText,
  WeuiFooterLinks,
  WeuiFooterLink,
  WeuiIcon,
  WeuiLoadmore,
  WeuiLoading,
  WeuiDialog,
  WeuiGrid,
  WeuiGridItem,
  WeuiTopTips,
  WeuiToast,
  WeuiActionSheet,
  WeuiMsg,
  WeuiMsgFooterLink,
  WeuiArticle,
  WeuiTabbar,
  WeuiTabbarItem
]
// 定义install方法，接受Vue作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
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