import WeuiPicker from './src/picker'

WeuiPicker.install = vue => {
  const pickerContrustor = vue.extend(WeuiPicker)
  const picker = new pickerContrustor
  picker.$mount(document.createElement('div'))
  document.body.appendChild(picker.$el)

  vue.prototype.$picker = picker

  vue.component(WeuiPicker.name, WeuiPicker)
}

export default WeuiPicker