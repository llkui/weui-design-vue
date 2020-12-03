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
import WeuiGallery from './gallery'
import {
  WeuiGrid,
  WeuiGridItem
} from './grid'
import WeuiIcon from './icon'
import WeuiLoadmore from './loadmore'
import WeuiLoading from './loading'
import WeuiPanel from './panel'
import {
  WeuiPreview,
  WeuiPreviewItem
} from './preview'
import WeuiDialog from './dialog'
import WeuiTopTips from './toptips'
import WeuiToast from './toast'
import WeuiActionSheet from './action-sheet'
import {
  WeuiMsg,
  WeuiMsgFooterLink
} from './msg'
import WeuiArticle from './article'
import WeuiBadge from './badge'
import {
  WeuiTabbar,
  WeuiTabbarItem
} from './tabbar'
import {
  WeuiNavbar,
  WeuiNavbarItem
} from './navbar'
import WeuiSearchBar from './search-bar'
import WeuiHalfScreenDialog from './half-screen-dialog'
import WeuiSlider from './slider'
import WeuiProgress from './progress'
import {
  WeuiTextarea
} from './form'
import WeuiPicker from './picker'

// 所有组件列表
const components = [
  WeuiButton,
  WeuiCellList,
  WeuiCell,
  WeuiFlex,
  WeuiFlexItem,
  WeuiFooter,
  WeuiGallery,
  WeuiGrid,
  WeuiGridItem,
  WeuiFooterText,
  WeuiFooterLinks,
  WeuiFooterLink,
  WeuiIcon,
  WeuiLoadmore,
  WeuiLoading,
  WeuiPanel,
  WeuiPreview,
  WeuiPreviewItem,
  WeuiDialog,
  WeuiTopTips,
  WeuiToast,
  WeuiActionSheet,
  WeuiMsg,
  WeuiMsgFooterLink,
  WeuiArticle,
  WeuiBadge,
  WeuiTabbar,
  WeuiTabbarItem,
  WeuiNavbar,
  WeuiNavbarItem,
  WeuiSearchBar,
  WeuiHalfScreenDialog,
  WeuiSlider,
  WeuiProgress,
  WeuiTextarea,
  WeuiPicker
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