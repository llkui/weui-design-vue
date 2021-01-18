export type PickerOption = {
  label: string;
  value: string;
  disabled?: boolean;
  children?: Array<PickerOption>
}

export type PickerConfig = {
  title: string;
  depth?: number;
  options: Array<PickerOption>;
  default?: Array<number>;
  maskClosable?: boolean;
  showClose?: boolean;
}

export type PickerDateConfig = {
  title: string;
  start: string;
  end: string;
  default: string;
}

export interface WeuiPicker {
  show(config: PickerConfig): Promise<Array<any>>
  showDate(config: PickerDateConfig): Promise<string>
}

declare module 'vue/types/vue' {
  interface Vue {
    $picker: WeuiPicker
  }
}

export const WeuiPicker: WeuiPicker