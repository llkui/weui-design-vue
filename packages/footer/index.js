import WeuiFooter from './src/footer'
import WeuiFooterText from './src/footerText'
import WeuiFooterLinks from './src/footerLinks'
import WeuiFooterLink from './src/footerLink'

WeuiFooter.install = vue => {
  vue.component(WeuiFooter.name, WeuiFooter)
  vue.component(WeuiFooterText.name, WeuiFooterText)
  vue.component(WeuiFooterLinks.name, WeuiFooterLinks)
  vue.component(WeuiFooterLink.name, WeuiFooterLink)
}

export {
  WeuiFooter,
  WeuiFooterText,
  WeuiFooterLinks,
  WeuiFooterLink
}