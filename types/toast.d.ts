export type ToastConfig = {
  duration?: number,
  more?: boolean
}

export interface WeuiToast {
  success(text: string, config?: ToastConfig): void
  warn(text: string, config?: ToastConfig): void
  loading(text: string, config?: ToastConfig): void
  info(text: string, config?: ToastConfig): void
  hide(): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: WeuiToast;
  }
}

export const WeuiToast: WeuiToast