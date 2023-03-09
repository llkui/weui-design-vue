import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}

const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const content =
          tokens[idx + 1].type === 'fence' ?
            tokens[idx + 1].content :
            ''
        return `
        <div class="example">
          <div class="example-showcase">
            ${content}
          </div>
        `
      } else {
        return '</div>'
      }
    },
  } as ContainerOpts)
}

export default mdPlugin