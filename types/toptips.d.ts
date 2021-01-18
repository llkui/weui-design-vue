export type ToptipsConfig = {
  duration?: number
}

export interface WeuiToptips {
  show(text: string, config?: ToptipsConfig): void
  hide(): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $toptips: WeuiToptips
  }
}

export const WeuiToptips: WeuiToptips