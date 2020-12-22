<template>
  <div id="app">
    <div class="main">
      <!-- sidebar -->
      <div class="sidebar">
        <menuCom :data="navsData"></menuCom>
      </div>
      <div class="page-container">
        <router-view></router-view>
        <div class="footer">
          <a target="_blank" href="https://github.com/llkui/weui-design-vue"
            >weui-design-vue</a
          >
          2020 Implement By llkui
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menuCom from './components/menuCom'
import navsData from './router/routerCon.json'
export default {
  components: {
    menuCom
  },
  data () {
    return {
      navsData
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
}
.footer {
  padding: 20px;
  text-align: center;
}
.main {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
}
.sidebar {
  overflow: auto;
}
.sidebar {
  float: left;
  height: 100%;
  width: 220px;
  border-right: #000000 3px solid;
  background-color: #17171d;
}
@media screen and (max-width: 1150px) {
  .sidebar {
    display: none;
  }
}
.page-container {
  float: left;
  height: 100%;
  width: calc(100% - 223px);
  overflow: auto;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
  }
}
</style>