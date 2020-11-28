import WeuiActionSheet from './src/action-sheet'

WeuiActionSheet.install = vue => {
  const actionSheetContrustor = vue.extend(WeuiActionSheet)
  const actionSheet = new actionSheetContrustor()
  actionSheet.$mount(document.createElement('div'))
  document.body.appendChild(actionSheet.$el)

  vue.prototype.$actionSheet = actionSheet

  vue.component(WeuiActionSheet.name, WeuiActionSheet)
}

export default WeuiActionSheet