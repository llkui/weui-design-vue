import { WeuiArticle } from './article'
import { WeuiBadge } from './badge'
import { WeuiButton } from './button'
import { WeuiCell, WeuiCellGroup } from './cell'
import { WeuiFlex, WeuiFlexItem } from './flex'
import { WeuiFooter, WeuiFooterLink, WeuiFooterLinks, WeuiFooterText } from './footer'
import { WeuiGrid, WeuiGridItem } from './grid'
import { WeuiIcon } from './icon'
import { WeuiLoading } from './loading'
import { WeuiLoadmore } from './loadmore'

// 所有组件列表
const components = [
  WeuiArticle,
  WeuiBadge,
  WeuiButton,
  WeuiCell,
  WeuiCellGroup,
  WeuiFlex,
  WeuiFlexItem,
  WeuiFooter,
  WeuiFooterLink,
  WeuiFooterLinks,
  WeuiFooterText,
  WeuiGrid,
  WeuiGridItem,
  WeuiIcon,
  WeuiLoading,
  WeuiLoadmore,
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
  WeuiArticle,
  WeuiBadge,
  WeuiButton,
  WeuiCell,
  WeuiCellGroup,
  WeuiFlex,
  WeuiFlexItem,
  WeuiFooter,
  WeuiFooterLink,
  WeuiFooterLinks,
  WeuiFooterText,
  WeuiGrid,
  WeuiGridItem,
  WeuiIcon,
  WeuiLoading,
  WeuiLoadmore,
} 