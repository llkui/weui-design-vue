## 更新日志

### progress...

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
- picker: showDate日期控件，默认值由array变更为string[2017, 9, 9]变更为'2017-9-9'
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