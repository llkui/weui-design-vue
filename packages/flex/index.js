import WeuiFlex from './src/flex'

WeuiFlex.install = vue => {
  vue.component(WeuiFlex.name, WeuiFlex)
}

export default WeuiFlex