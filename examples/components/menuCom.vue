<template>
  <div class="side-nav">
    <ul>
      <li :key="key" class="nav-item" v-for="(item, key) in data">
        <template v-if="item.groups">
          <div :key="key" class="nav-group" v-for="(group, key) in item.groups">
            <div class="nav-group__title">{{ group.groupName }}</div>
            <ul class="pure-menu-list">
              <li
                :key="key"
                class="nav-item"
                v-for="(navItem, key) in group.list"
                v-show="!navItem.disabled"
              >
                <router-link :to="navItem.path" active-class="active" exact v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <router-link :to="item.path" active-class="active" exact v-text="item.title"></router-link>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: Array
  },
  data () {
    return {
      highlights: [],
      navState: [],
      isSmallScreen: false,
      isFade: false
    }
  }
}
</script>

<style lang="scss">
.side-nav {
  width: 100%;
  box-sizing: border-box;
  transition: opacity 0.3s;
  &.is-fade {
    transition: opacity 3s;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  > ul > .nav-item > a {
    margin-top: 15px;
  }
  > ul > .nav-item:nth-child(-n + 4) > a {
    margin-top: 0;
    margin-bottom: 15px;
  }
  .nav-item {
    a {
      font-size: 20px;
      color: #333;
      padding-left: 20px;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: bold;
      &.active {
        color: #07c160;
        border-bottom: #000000 2px solid;
        border-radius: 4px;
      }
    }
    .nav-item {
      a {
        display: block;
        height: 30px;
        margin: 0;
        padding-top: 10px;
        color: #444;
        line-height: 40px;
        font-size: 20px;
        overflow: hidden;
        font: 18px/1 Tahoma, Helvetica, Arial, '\5b8b\4f53', sans-serif;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
        &:hover,
        &.active {
          color: #07c160;
        }
      }
    }
    &.sponsors {
      & > .sub-nav {
        margin-top: -10px;
      }
      & > a {
        color: #777;
        font-weight: 300;
        font-size: 14px;
      }
      .nav-item {
        display: inline-block;
        a {
          height: auto;
          display: inline-block;
          vertical-align: middle;
          margin: 8px 12px 12px 0;
          img {
            width: 42px;
          }
        }
        &:first-child a img {
          width: 36px;
        }
      }
    }
  }
  .nav-group__title {
    font-size: 16px;
    color: rgb(153, 153, 153);
    line-height: 26px;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  #code-sponsor-widget {
    margin: 0 0 0 -20px;
  }
}
.nav-dropdown-list {
  width: 120px;
  margin-top: -8px;
  li {
    font-size: 14px;
  }
}
</style>