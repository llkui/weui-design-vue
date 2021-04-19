## 更新日志

### 2.0.6

`2021-04-19`

#### Features

- toast: config添加callback，支持关闭后回调

### 2.0.5

`2021-04-09`

#### Features

- dialog: 添加函数调用$dialog.show(config) (<a href="https://github.com/llkui/weui-design-vue/issues/4" target="_blank">#4</a>)
- 添加全局样式，优化dark模式下样式异常 (<a href="https://github.com/llkui/weui-design-vue/issues/5" target="_blank">#5</a>)

### 2.0.4

`2021-02-26`

#### Features

- toast: config添加more属性，支持长文案场景
- msg: 添加custom插槽
- 新增 `preview-list` `list-tips` `list-tips-item` 组件

### 2.0.2

`2021-02-19`

#### Features

- weui: 更新至2.4.3

### 2.0.1

`2021-02-01`

#### Bug Fixes

- picker: 修复点击选中异常

### 2.0.0

`2021-01-25`

#### Features

- 支持 TypeScript

### 1.0.0

`2020-12-31`

#### Features

- tabbar: 添加count和dot属性
- picker: 支持点击选中

#### Breaking changes

- dialog: 移除content属性，采用内嵌实现

### 0.1.3

`2020-12-25`

#### Bug Fixes

- picker: 修复滚动异常
- form-tip: 修复tipContent属性异常
- form-switch: 修复点击事件绑定错误
- msg: 修复type为null时显示异常，修复tips和extra不存在时显示异常

#### Breaking Changes

- panel: img属性更名为icon
- preview: onClick回调事件更名为click

### 0.1.2

`2020-12-18`

#### Bug Fixes

- cell-group-title: 修复title属性不生效

#### Features

- form-tip: 增加tipContent属性
- half screen dialog: 插槽移除name引入，改为直接引入
- form-checkbox: 增加showMore属性和onMore事件回调
- form-radio: more回调事件更名为onMore
- form-text: 样式优化
- select-group: body支持string
- uploader: FileListItem添加progress属性
- 新增 `form-control` 组件

#### Breaking Changes

- form-radio: 内嵌插槽提取为label属性
- form-switch: 内嵌插槽提取为label属性
- picker: showDate日期控件，默认值由array变更为string，例如：[2017, 9, 9]变更为'2017-9-9'
- gallery: img属性更名为src，show属性更名为visible

### 0.1.0

`2020-12-11`

#### Bug Fixes

- button: 修复disabled变更时没有变更样式的问题
- picker: 修复多次点击后，选择错误的问题

#### Features

- input: 支持v-model双向绑定，增加error错误状态
- button: 增加inForm属性和click事件回调
- icon: 增加mini属性
- radio: 增加showMore、moreText属性和more事件回调
- toast、toptips: 增加cofnig配置，可设置自动关闭时长
- list: 增加label、is-active、swipeText属性和clickBtn事件回调
- 增加 `form-tip` `form-opr` `from-extra` `checkbox-agree` `select` `media` `media-info` `media-info-meta` `preview-button` 组件
- 移除 `msg-footer-link` 组件

### 0.1.0-beta

`2020-12-08`

- 完成 20+ 对应 weui 的组件