## 定制主题

### 预定义主题

1、自定义样式变量

创建样式文件 `theme.css`，并自定义样式变量


```css
body {
  /* 主题颜色 */
  --weui-BRAND: #10aeff;
  /* 主题TAG颜色 */
  --weui-TAG-TEXT-GREEN: #0c98df;
  /* 主题默认按钮颜色 */
  --weui-BTN-DEFAULT-COLOR: #0c98df;
}
```

2、引入自定义主题文件

在 `src/main.js` 文件中引入，文件中带有+++为引入配置

```js
import Vue from 'vue'
import WeuiVue from 'weui-design-vue'
import 'weui-design-vue/lib/weui-design-vue.css'
import '../assets/theme.css' +++
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(WeuiVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

### 动态切换主题

1、自定义样式变量

创建样式文件 `style-blue.css`，自定义样式变量，并将其放入 `public/themes` 下

```css
body {
  /* 主题颜色 */
  --weui-BRAND: #10aeff;
  /* 主题TAG颜色 */
  --weui-TAG-TEXT-GREEN: #0c98df;
  /* 主题默认按钮颜色 */
  --weui-BTN-DEFAULT-COLOR: #0c98df;
}
```

2、切换预定义主题

切换预定义主题样式文件则是需要动态创建 `link` 标签，将样式文件动态加载在应用中

```js
if (theme === 'blue') {
  // 切换蓝色主题
  // 变量publicPath: process.env.BASE_URL
  const style = document.createElement('link');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.id = 'blue-theme';
  style.href = `${this.publicPath}themes/style-blue.css`;
  document.body.appendChild(style);
} else {
  // 切换默认主题
  const dom = document.getElementById('blue-theme');
  if (dom) {
    dom.remove();
  }
}
```

### 预定义样式变量

```css
body {
  --weui-BG-0: #ededed;
  --weui-BG-1: #f7f7f7;
  --weui-BG-2: #fff;
  --weui-BG-3: #f7f7f7;
  --weui-BG-4: #4c4c4c;
  --weui-BG-5: #fff;
  --weui-FG-0: rgba(0, 0, 0, 0.9);
  --weui-FG-HALF: rgba(0, 0, 0, 0.9);
  --weui-FG-1: rgba(0, 0, 0, 0.5);
  --weui-FG-2: rgba(0, 0, 0, 0.3);
  --weui-FG-3: rgba(0, 0, 0, 0.1);
  --weui-RED: #fa5151;
  --weui-ORANGE: #fa9d3b;
  --weui-YELLOW: #ffc300;
  --weui-GREEN: #91d300;
  --weui-LIGHTGREEN: #95ec69;
  --weui-BRAND: #07c160;
  --weui-BLUE: #10aeff;
  --weui-INDIGO: #1485ee;
  --weui-PURPLE: #6467f0;
  --weui-WHITE: #fff;
  --weui-LINK: #576b95;
  --weui-TEXTGREEN: #06ae56;
  --weui-FG: black;
  --weui-BG: white;
  --weui-TAG-TEXT-ORANGE: #fa9d3b;
  --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
  --weui-TAG-TEXT-GREEN: #06ae56;
  --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
  --weui-TAG-TEXT-BLUE: #10aeff;
  --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
  --weui-TAG-TEXT-BLACK: rgba(0, 0, 0, 0.5);
  --weui-TAG-BACKGROUND-BLACK: rgba(0, 0, 0, 0.05);
}
```