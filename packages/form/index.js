import WeuiTextarea from './src/textarea'

WeuiTextarea.install = vue => {
  vue.component(WeuiTextarea.name, WeuiTextarea)
}

export {
  WeuiTextarea
}