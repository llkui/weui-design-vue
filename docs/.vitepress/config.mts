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
  { text: '组件', link: '/components/button' },
];

// 侧边导航配置

const sidebar = {
  '/component/': [
    {
      text: '通用',
      collapsible: true,
      items: [
        { text: 'Button 按钮', link: '/components/button' },
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
  base: '/weui-design/vue/3.0.0/',
  head,
  themeConfig: {
    nav,
    sidebar,
    smoothScroll: true,
  },
};

export default config;