import WeuiForm from './src/form'
import WeuiFormGroup from './src/group'
import WeuiFormTip from './src/tip'
import WeuiFormOpr from './src/opr'
import WeuiFormExtra from './src/extra'
import WeuiCheckboxAgree from './src/checkbox-agree'
import WeuiInput from './src/input'
import WeuiRadio from './src/radio'
import WeuiRadioGroup from './src/radio-group'
import WeuiCheckbox from './src/checkbox'
import WeuiCheckboxGroup from './src/checkbox-group'
import WeuiSelect from './src/select'
import WeuiOption from './src/option'
import WeuiSelectGroup from './src/select-group'
import WeuiTextarea from './src/textarea'
import WeuiSwitch from './src/switch'


WeuiForm.install = vue => {
  vue.component(WeuiForm.name, WeuiForm)
  vue.component(WeuiFormGroup.name, WeuiFormGroup)
  vue.component(WeuiFormTip.name, WeuiFormTip)
  vue.component(WeuiFormOpr.name, WeuiFormOpr)
  vue.component(WeuiFormExtra.name, WeuiFormExtra)
  vue.component(WeuiCheckboxAgree.name, WeuiCheckboxAgree)
  vue.component(WeuiInput.name, WeuiInput)
  vue.component(WeuiRadio.name, WeuiRadio)
  vue.component(WeuiRadioGroup.name, WeuiRadioGroup)
  vue.component(WeuiCheckbox.name, WeuiCheckbox)
  vue.component(WeuiCheckboxGroup.name, WeuiCheckboxGroup)
  vue.component(WeuiSelect.name, WeuiSelect)
  vue.component(WeuiOption.name, WeuiOption)
  vue.component(WeuiSelectGroup.name, WeuiSelectGroup)
  vue.component(WeuiTextarea.name, WeuiTextarea)
  vue.component(WeuiSwitch.name, WeuiSwitch)
}

export {
  WeuiForm,
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
}