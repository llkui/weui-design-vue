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
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Form 表单页', link: '/components/form' },
        { text: 'List 列表', link: '/components/list' },
        { text: 'Slider 滑块', link: '/components/slider' },
        { text: 'Uploader 上传', link: '/components/uploader' },
      ],
    },
    {
      text: '基础组件',
      collapsible: true,
      items: [
        { text: 'Article 文章', link: '/components/article' },
        { text: 'Badge 徽章', link: '/components/badge' },
        { text: 'Flex 布局', link: '/components/flex' },
        { text: 'Footer 页脚', link: '/components/footer' },
        { text: 'Gallery', link: '/components/gallery' },
        { text: 'Grid 九宫格', link: '/components/grid' },
        { text: 'Icons 图标', link: '/components/icons' },
        { text: 'Loading 正在加载', link: '/components/loading' },
        { text: 'Loadmore 加载更多', link: '/components/loadmore' },
        { text: 'Panel 面板', link: '/components/panel' },
        { text: 'Preview 表单预览', link: '/components/preview' },
        { text: 'Progress 进度条', link: '/components/progress' },
        { text: 'Steps 步骤条', link: '/components/steps' },
      ],
    },
    {
      text: '操作反馈',
      collapsible: true,
      items: [
        { text: 'ActionSheet 弹出式菜单', link: '/components/actionsheet' },
        { text: 'Dialog 对话框', link: '/components/dialog' },
        { text: 'Half-screen Dialog 半屏', link: '/components/half-screen-dialog' },
        { text: 'Msg 提示页', link: '/components/msg' },
        { text: 'Picker 多列选择器', link: '/components/picker' },
        { text: 'Toast 弹出式提示', link: '/components/toast' },
        { text: 'TopTips 顶部提示条', link: '/components/top-tips' },
      ],
    },
    {
      text: '导航相关',
      collapsible: true,
      items: [
        { text: 'Navbar', link: '/components/navbar' },
        { text: 'Tabbar', link: '/components/tabbar' },
      ],
    },
    {
      text: '搜索相关',
      collapsible: true,
      items: [
        { text: 'SearchBar 搜索栏', link: '/components/searchbar' },
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
  title: 'WeUI Design Vue',
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