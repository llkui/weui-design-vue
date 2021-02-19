import WeuiActionSheet from './action-sheet'
import WeuiArticle from './article'
import WeuiBadge from './badge'
import WeuiButton from './button'
import WeuiCell from './cell'
import WeuiCellGroup from './cell-group'
import WeuiCellGroupTitle from './cell-group-title'
import WeuiDialog from './dialog'
import WeuiFlex from './flex'
import WeuiFlexItem from './flex-item'
import WeuiFooter from './footer'
import WeuiFooterLink from './footer-link'
import WeuiFooterLinks from './footer-links'
import WeuiFooterText from './footer-text'
import {
  WeuiForm,
  WeuiFormControl,
  WeuiFormGroup,
  WeuiFormTip,
  WeuiFormOpr,
  WeuiFormExtra,
  WeuiCheckboxAgree,
  WeuiInput,
  WeuiRadio,
  WeuiRadioGroup,
  WeuiCheckbox,
  WeuiCheckboxGroup,
  WeuiSelect,
  WeuiOption,
  WeuiSelectGroup,
  WeuiTextarea,
  WeuiSwitch,
} from './form'
import WeuiGallery from './gallery'
import WeuiGrid from './grid'
import WeuiGridItem from './grid-item'
import WeuiHalfScreenDialog from './half-screen-dialog'
import WeuiIcon from './icon'
import WeuiLoading from './loading'
import WeuiLoadmore from './loadmore'
import WeuiMsg from './msg'
import {
  WeuiNavbar,
  WeuiNavbarItem
} from './navbar'
import {
  WeuiPanel,
  WeuiMedia,
  WeuiMediaInfo,
  WeuiMediaInfoMeta
} from './panel'
import WeuiPicker from './picker'
import {
  WeuiPreview,
  WeuiPreviewItem,
  WeuiPreviewButton
} from './preview'
import WeuiProgress from './progress'
import WeuiSearchBar from './search-bar'
import WeuiSlider from './slider'
import {
  WeuiTab,
  WeuiTabPanel
} from './tab'
import {
  WeuiTabbar,
  WeuiTabbarItem
} from './tabbar'
import WeuiToast from './toast'
import WeuiTopTips from './toptips'
import WeuiUploader from './uploader'

import './weui.scss'

// 所有组件列表
const components = [
  WeuiActionSheet,
  WeuiArticle,
  WeuiBadge,
  WeuiButton,
  WeuiCell,
  WeuiCellGroup,
  WeuiCellGroupTitle,
  WeuiDialog,
  WeuiFlex,
  WeuiFlexItem,
  WeuiFooter,
  WeuiFooterLink,
  WeuiFooterLinks,
  WeuiFooterText,
  WeuiForm,
  WeuiFormControl,
  WeuiFormGroup,
  WeuiFormTip,
  WeuiFormOpr,
  WeuiFormExtra,
  WeuiCheckboxAgree,
  WeuiInput,
  WeuiRadio,
  WeuiRadioGroup,
  WeuiCheckbox,
  WeuiCheckboxGroup,
  WeuiSelect,
  WeuiOption,
  WeuiSelectGroup,
  WeuiTextarea,
  WeuiSwitch,
  WeuiGallery,
  WeuiGrid,
  WeuiGridItem,
  WeuiHalfScreenDialog,
  WeuiIcon,
  WeuiLoading,
  WeuiLoadmore,
  WeuiMsg,
  WeuiNavbar,
  WeuiNavbarItem,
  WeuiPanel,
  WeuiMedia,
  WeuiMediaInfo,
  WeuiMediaInfoMeta,
  WeuiPicker,
  WeuiPreview,
  WeuiPreviewItem,
  WeuiPreviewButton,
  WeuiProgress,
  WeuiSearchBar,
  WeuiSlider,
  WeuiTab,
  WeuiTabPanel,
  WeuiTabbar,
  WeuiTabbarItem,
  WeuiToast,
  WeuiTopTips,
  WeuiUploader,
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
  ...components
}

export {
  WeuiActionSheet,
  WeuiArticle,
  WeuiBadge,
  WeuiButton,
  WeuiCell,
  WeuiCellGroup,
  WeuiCellGroupTitle,
  WeuiDialog,
  WeuiFlex,
  WeuiFlexItem,
  WeuiFooter,
  WeuiFooterLink,
  WeuiFooterLinks,
  WeuiFooterText,
  WeuiForm,
  WeuiFormControl,
  WeuiFormGroup,
  WeuiFormTip,
  WeuiFormOpr,
  WeuiFormExtra,
  WeuiCheckboxAgree,
  WeuiInput,
  WeuiRadio,
  WeuiRadioGroup,
  WeuiCheckbox,
  WeuiCheckboxGroup,
  WeuiSelect,
  WeuiOption,
  WeuiSelectGroup,
  WeuiTextarea,
  WeuiSwitch,
  WeuiGallery,
  WeuiGrid,
  WeuiGridItem,
  WeuiHalfScreenDialog,
  WeuiIcon,
  WeuiLoading,
  WeuiLoadmore,
  WeuiMsg,
  WeuiNavbar,
  WeuiNavbarItem,
  WeuiPanel,
  WeuiMedia,
  WeuiMediaInfo,
  WeuiMediaInfoMeta,
  WeuiPicker,
  WeuiPreview,
  WeuiPreviewItem,
  WeuiPreviewButton,
  WeuiProgress,
  WeuiSearchBar,
  WeuiSlider,
  WeuiTab,
  WeuiTabPanel,
  WeuiTabbar,
  WeuiTabbarItem,
  WeuiToast,
  WeuiTopTips,
  WeuiUploader
}