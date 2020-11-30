import WeuiGallery from './src/gallery'

WeuiGallery.install = vue => {
  vue.component(WeuiGallery.name, WeuiGallery)
}

export default WeuiGallery