<template>
  <div id="app">
    <div class="main">
      <!-- sidebar -->
      <div class="sidebar">
        <menuCom :data="navsData"></menuCom>
      </div>
      <div class="view page-container">
        <router-view></router-view>
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
  position: absolute;
  height: 60px;
  width: 100%;
}
.footer {
  bottom: 0;
}
.main {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
}
.sidebar,
.view {
  overflow: auto;
}
.sidebar {
  float: left;
  height: 100%;
  width: 200px;
  padding: 10px 0 10px 0;
  border-right: #000000 3px solid;
  background-color: #17171d;
}
.view {
  float: left;
  height: 100%;
  width: calc(100% - 203px);
  overflow: auto;
}
</style>