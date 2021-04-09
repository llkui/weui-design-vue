import Vue from 'vue'
import { WeuiComponent } from './component'
import { WeuiToast } from './toast'
import { WeuiToptips } from './toptips'
import { WeuiPicker } from './picker'
import { WeuiActionSheet } from './action-sheet'
import { WeuiDialog } from './dialog'

export const version: string
export function install(vue: typeof Vue): void

export class WeuiArticle extends WeuiComponent { }
export class WeuiBadge extends WeuiComponent { }
export class WeuiButton extends WeuiComponent { }
export class WeuiFlex extends WeuiComponent { }
export class WeuiFlexItem extends WeuiComponent { }
export class WeuiFooter extends WeuiComponent { }
export class WeuiFooterText extends WeuiComponent { }
export class WeuiFooterLinks extends WeuiComponent { }
export class WeuiFooterLink extends WeuiComponent { }
export class WeuiForm extends WeuiComponent { }
export class WeuiFormControl extends WeuiComponent { }
export class WeuiFormGroup extends WeuiComponent { }
export class WeuiFormTip extends WeuiComponent { }
export class WeuiFormOpr extends WeuiComponent { }
export class WeuiFormExtra extends WeuiComponent { }
export class WeuiCheckboxAgree extends WeuiComponent { }
export class WeuiInput extends WeuiComponent { }
export class WeuiRadio extends WeuiComponent { }
export class WeuiRadioGroup extends WeuiComponent { }
export class WeuiCheckbox extends WeuiComponent { }
export class WeuiCheckboxGroup extends WeuiComponent { }
export class WeuiSelect extends WeuiComponent { }
export class WeuiOption extends WeuiComponent { }
export class WeuiSelectGroup extends WeuiComponent { }
export class WeuiTextarea extends WeuiComponent { }
export class WeuiSwitch extends WeuiComponent { }
export class WeuiGallery extends WeuiComponent { }
export class WeuiGrid extends WeuiComponent { }
export class WeuiGridItem extends WeuiComponent { }
export class WeuiHalfScreenDialog extends WeuiComponent { }
export class WeuiIcon extends WeuiComponent { }
export class WeuiCellGroupTitle extends WeuiComponent { }
export class WeuiCellGroup extends WeuiComponent { }
export class WeuiCell extends WeuiComponent { }
export class WeuiLoading extends WeuiComponent { }
export class WeuiLoadmore extends WeuiComponent { }
export class WeuiMsg extends WeuiComponent { }
export class WeuiNavbar extends WeuiComponent { }
export class WeuiNavbarItem extends WeuiComponent { }
export class WeuiPanel extends WeuiComponent { }
export class WeuiMedia extends WeuiComponent { }
export class WeuiMediaInfo extends WeuiComponent { }
export class WeuiMediaInfoMeta extends WeuiComponent { }
export class WeuiPreview extends WeuiComponent { }
export class WeuiPreviewItem extends WeuiComponent { }
export class WeuiPreviewButton extends WeuiComponent { }
export class WeuiProgress extends WeuiComponent { }
export class WeuiSearchBar extends WeuiComponent { }
export class WeuiSlider extends WeuiComponent { }
export class WeuiTab extends WeuiComponent { }
export class WeuiTabPanel extends WeuiComponent { }
export class WeuiTabbar extends WeuiComponent { }
export class WeuiTabbarItem extends WeuiComponent { }
export class WeuiUploader extends WeuiComponent { }

export {
  WeuiToast,
  WeuiToptips,
  WeuiPicker,
  WeuiActionSheet,
  WeuiDialog
}