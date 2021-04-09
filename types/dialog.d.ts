export type DialogConfig = {
  type?: string,
  title?: string,
  content?: string | HTMLElement,
  cancelText?: string,
  onText?: string,
  showCancel?: boolean,
  showOk?: boolean,
  onClose?: Function,
  onOk?: Function
}

export interface WeuiDialog {
  show(config): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: WeuiDialog
  }
}

export const WeuiDialog: WeuiDialog