import WeuiToptips from './src/toptips'

WeuiToptips.install = vue => {
  // 创建组件构造器
  const toptipsContrustor = vue.extend(WeuiToptips)
  // new的方式，根据组件构造器，可以创建出一个组件对象
  const toptips = new toptipsContrustor()
  // 将组件对象，手动挂载到某一元素上
  toptips.$mount(document.createElement('div'))
  // toptips.$el对应的就是div
  document.body.appendChild(toptips.$el)

  vue.prototype.$toptips = toptips

  vue.component(WeuiToptips.name, WeuiToptips)
}

export default WeuiToptips