import WeuiMsg from './src/msg'

WeuiMsg.install = vue => {
  vue.component(WeuiMsg.name, WeuiMsg)
}

export default WeuiMsg