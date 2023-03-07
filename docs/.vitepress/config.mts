import type { UserConfig, HeadConfig } from 'vitepress';

// 在html文档增加一些通用的脚本script、样式css、meta等
const head: HeadConfig[] = [
  [
    'script',
    {},
    `;(() => {
       console.log('script');
     })()`,
  ],
];

// 顶部导航配置
const nav = [
  { text: '指导', link: '/guide/getting-started', activeMatch: 'guide' },
  { text: '组件', link: '/components/button', activeMatch: 'components' },
  { text: '博客', link: '/blog/blog1', activeMatch: 'blog' },
  {
    text: '资源',
    items: [
      { text: 'Vue.js', link: 'https://cn.vuejs.org/' },
      { text: 'VitePress', link: 'https://vitepress.vuejs.org/' },
      { text: 'WeUI', link: 'https://weui.io/' },
    ]
  },
];

// 侧边导航配置

const sidebar = {
  '/guide/': [
    {
      text: '指导',
      collapsible: true,
      items: [
        { text: 'Weui Design of Vue', link: '/guide/introduce' },
        { text: '快速上手', link: '/guide/getting-started' },
        { text: '定制主题', link: '/guide/customize-theme' },
        { text: '更新日志', link: '/guide/changelog' },
      ],
    },
  ],
  '/components/': [
    {
      text: '表单',
      collapsible: true,
      items: [
        { text: 'Button', link: '/components/button' },
        { text: 'Form', link: '/components/form' },
        { text: 'List', link: '/components/list' },
        { text: 'Slider', link: '/components/slider' },
        { text: 'Uploader', link: '/components/uploader' },
      ],
    },
  ],
  '/blog/': [
    {
      text: '博客',
      collapsible: true,
      items: [
        { text: '博客1', link: '/blog/blog1' },
      ],
    },
  ]
}


const config: UserConfig = {
  title: 'Ant Design Vue',
  description: 'A Mobile UI components based on `Weui Design` and `Vue`',
  lang: 'zh-CN',
  lastUpdated: true,
  ignoreDeadLinks: true,
  base: '/weui-design-vue/3.0.0/',
  head,
  themeConfig: {
    logo: '/logo.png',
    nav,
    sidebar,
    smoothScroll: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/llkui/weui-design-vue' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present llkui'
    },
  },
};

export default config;