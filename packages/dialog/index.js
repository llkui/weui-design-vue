import WeuiDialog from './src/dialog'

WeuiDialog.install = vue => {
  // 创建组件构造器
  const dialogConstructor = vue.extend(WeuiDialog)
  // new的方式，根据组件构造器，可以创建出一个组件的对象
  const dialog = new dialogConstructor()
  // 将组件对象，手动挂载得到某一元素上
  dialog.$mount(document.createElement('div'))
  // dialog.$el对应的就是div
  document.body.appendChild(dialog.$el)

  vue.prototype.$dialog = dialog

  vue.component(WeuiDialog.name, WeuiDialog)
}

export default WeuiDialog