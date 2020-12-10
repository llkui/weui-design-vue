## msg

:::demo

```html
<weui-msg title="操作成功">
  <template slot="desc">
    内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="btn">
    <weui-button>推荐操作</button>
  </template>
  <template slot="tips">
    提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="extra">
    <weui-footer>
      <weui-footer-links>
        <weui-footer-link>底部链接文本</weui-footer-link>
      </weui-footer-links>
      <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
    </weui-footer>
  </template>
</weui-msg>
```

:::

## type:warn

:::demo

```html
<weui-msg type="warn" title="操作失败">
  <template slot="desc">
    内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="tips">
    提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="btn">
    <weui-button type="default">辅助操作</button>
  </template>
  <template slot="extra">
    <weui-footer>
      <weui-footer-links>
        <weui-footer-link>底部链接文本</weui-footer-link>
      </weui-footer-links>
      <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
    </weui-footer>
  </template>
</weui-msg>
```

:::

## type:null

:::demo

```html
<weui-msg type="null" title="操作成功">
  <template slot="desc">
    内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="btn">
    <weui-button>推荐操作</button>
  </template>
</weui-msg>
```

:::

## type:null and title:null

:::demo

```html
<weui-msg type="null">
  <template slot="desc">
    内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="descPrimary">
    内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
  </template>
  <template slot="tips">
    提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    <a href="javascript:">文字链接</a>
  </template>
  <template slot="btn">
    <weui-button>推荐操作</button>
  </template>
</weui-msg>
```

:::

## Attributes

| 参数        | 说明     | 类型          | 可选值         | 默认值  |
| ----------- | -------- | ------------- | -------------- | ------- |
| type        | 类型     | string        | success / warn | success |
| title       | 标题     | string / slot | —              | —       |
| desc        | 描述     | string / slot | —              | —       |
| descPrimary | 描述提示 | string / slot | —              | —       |
| tips        | 提示文本 | string / slot | —              | —       |
| extra       | 底部区域 | slot          | —              | —       |