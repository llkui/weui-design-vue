import WeuiFooter from './src/footer.vue'
import WeuiFooterLink from './src/footer-link.vue'
import WeuiFooterLinks from './src/footer-links.vue'
import WeuiFooterText from './src/footer-text.vue'

WeuiFooter.install = vue => {
  vue.component(WeuiFooter.name, WeuiFooter)
  vue.component(WeuiFooterLink.name, WeuiFooterLink)
  vue.component(WeuiFooterLinks.name, WeuiFooterLinks)
  vue.component(WeuiFooterText.name, WeuiFooterText)
}

export {
  WeuiFooter,
  WeuiFooterLink,
  WeuiFooterLinks,
  WeuiFooterText,
}