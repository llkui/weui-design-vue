import WeuiUploader from './src/uploader'

WeuiUploader.install = vue => {
  vue.component(WeuiUploader.name, WeuiUploader)
}

export default WeuiUploader