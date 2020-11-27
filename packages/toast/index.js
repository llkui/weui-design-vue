import WeuiToast from './src/toast'

WeuiToast.install = vue => {
  const toastContrustor = vue.extend(WeuiToast)
  const toast = new toastContrustor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast

  vue.component(WeuiToast.name, WeuiToast)
}

export default WeuiToast