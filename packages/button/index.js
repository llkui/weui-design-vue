// 暴露组件
import VwButton from './src/index'

VwButton.install = vue => {
  vue.component(VwButton.name, VwButton)
}

export default VwButton