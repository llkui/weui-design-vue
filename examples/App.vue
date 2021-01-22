<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <div class="logo">
        <Logo></Logo>
      </div>
      <a
        href="https://github.com/llkui/weui-design-vue"
        target="_blank"
        class="toGithub"
      >
        View on GitHub
      </a>
    </div>
    <div class="main">
      <!-- sidebar -->
      <div class="sidebar">
        <menuCom :data="navsData"></menuCom>
      </div>
      <div class="page-container" ref="pageContainer">
        <router-view></router-view>
        <div class="footer">
          <a target="_blank" href="https://github.com/llkui/weui-design-vue"
            >weui-design-vue</a
          >
          2020 Implement By llkui
        </div>
      </div>
    </div>
    <i role="img" class="anticon theme-icon" @click="changeTheme()">
      <svg fill="currentColor" height="21" viewBox="0 0 21 21" width="21">
        <g fill-rule="evenodd">
          <g fill-rule="nonzero">
            <path
              d="M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"
            ></path>
          </g>
        </g>
      </svg>
    </i>
  </div>
</template>
<script>
import Logo from './components/Logo'
import menuCom from './components/menuCom'
import navsData from './router/routerCon.json'
export default {
  components: {
    Logo,
    menuCom
  },
  data () {
    return {
      navsData,
      publicPath: process.env.BASE_URL
    }
  },
  watch: {
    $route: function () {
      const pageContainer = this.$refs.pageContainer
      pageContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initTheme()
    })
  },
  methods: {
    initTheme: function () {
      const siteTheme = localStorage.getItem('site-theme')
      if (siteTheme === 'blue') {
        this.changeStyle('blue');
      } else {
        this.changeStyle('default');
      }
    },
    changeTheme: function () {
      const config = {
        title: '切换主题',
      }
      const menus = [
        { text: '默认主题' },
        { text: '蓝色主题' },
      ]
      this.$actionSheet.show(config, menus).then((res) => {
        const siteTheme = res === 1 ? 'blue' : 'default'
        localStorage.setItem('site-theme', siteTheme)
        this.changeStyle(siteTheme)
      })
    },
    changeStyle: function (theme) {
      if (theme === 'blue') {
        const style = document.createElement('link');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.id = 'blue-theme';
        style.href = `${this.publicPath}themes/style-blue.css`;
        document.body.appendChild(style);
      } else {
        const dom = document.getElementById('blue-theme');
        if (dom) {
          dom.remove();
        }
      }
    }
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
.header {
  top: 0;
  height: 60px;
  border-bottom: 1px solid #eaecef;
}
.header .logo {
  float: left;
}
.header .toGithub {
  height: 60px;
  line-height: 60px;
  float: right;
  padding: 0 10px;
  color: inherit;
  cursor: pointer;
}
.footer {
  padding: 20px;
  text-align: center;
}
.main {
  position: absolute;
  bottom: 0;
  top: 60px;
  width: 100%;
  overflow: hidden;
}
.sidebar {
  overflow: auto;
}
.sidebar {
  float: left;
  height: 100%;
  width: 300px;
  border-right: 1px solid #eaecef;
}
@media screen and (max-width: 1150px) {
  .sidebar {
    display: none;
  }
}
.theme-icon {
  position: fixed;
  right: 45px;
  bottom: 60px;
  z-index: 9;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  padding: 7px;
  color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.page-container {
  float: left;
  height: 100%;
  width: calc(100% - 301px);
  overflow: auto;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
  }
}
</style>