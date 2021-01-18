export type ActionSheetConfig = {
  type?: string;
  title: string;
  cancelText?: string;
  maskClosable?: boolean;
}

export type ActionSheetMenu = {
  text: string;
  type?: string;
}

export interface WeuiActionSheet {
  show(config: ActionSheetConfig, menus: Array<ActionSheetMenu>): Promise<number>
}

declare module 'vue/types/vue' {
  interface Vue {
    $actionSheet: WeuiActionSheet
  }
}

export const WeuiActionSheet: WeuiActionSheet