import WeuiForm from './src/form'
import WeuiFormGroup from './src/group'
import WeuiInput from './src/input'
import WeuiRadio from './src/radio'
import WeuiRadioGroup from './src/radio-group'
import WeuiCheckbox from './src/checkbox'
import WeuiCheckboxGroup from './src/checkbox-group'
import WeuiTextarea from './src/textarea'
import WeuiSwitch from './src/switch'


WeuiForm.install = vue => {
  vue.component(WeuiForm.name, WeuiForm)
  vue.component(WeuiFormGroup.name, WeuiFormGroup)
  vue.component(WeuiInput.name, WeuiInput)
  vue.component(WeuiRadio.name, WeuiRadio)
  vue.component(WeuiRadioGroup.name, WeuiRadioGroup)
  vue.component(WeuiCheckbox.name, WeuiCheckbox)
  vue.component(WeuiCheckboxGroup.name, WeuiCheckboxGroup)
  vue.component(WeuiTextarea.name, WeuiTextarea)
  vue.component(WeuiSwitch.name, WeuiSwitch)
}

export {
  WeuiForm,
  WeuiFormGroup,
  WeuiInput,
  WeuiRadio,
  WeuiRadioGroup,
  WeuiCheckbox,
  WeuiCheckboxGroup,
  WeuiTextarea,
  WeuiSwitch,
}