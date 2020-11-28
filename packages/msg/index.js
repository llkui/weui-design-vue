import WeuiMsg from './src/msg'
import WeuiMsgFooterLink from './src/msg-footer-link'

WeuiMsg.install = vue => {
  vue.component(WeuiMsg.name, WeuiMsg)
  vue.component(WeuiMsgFooterLink.name, WeuiMsgFooterLink)
}

export {
  WeuiMsg,
  WeuiMsgFooterLink
}