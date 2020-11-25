import WeuiDialog from './src/dialog'

WeuiDialog.install = vue => {
  vue.component(WeuiDialog.name, WeuiDialog)
}

export default WeuiDialog