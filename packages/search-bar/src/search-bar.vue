<template>
  <div :class="search ? 'weui-search-bar_focusing' : ''" class="weui-search-bar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          class="weui-search-bar__input"
          placeholder="搜索"
          ref="searchInput"
          required
          type="search"
          v-model="text"
          v-on:input="input()"
        />
        <a @click="searchClear()" class="weui-icon-clear" href="javascript:"></a>
      </div>
      <label @click="searchText()" class="weui-search-bar__label">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a @click="searchCancel()" class="weui-search-bar__cancel-btn" href="javascript:">取消</a>
  </div>
</template>
<script>
export default {
  name: 'WeuiSearchBar',
  data () {
    return {
      search: false,
      text: ''
    }
  },
  methods: {
    searchText: function () {
      this.search = true
      this.$refs.searchInput.focus()
    },
    searchCancel: function () {
      this.text = ''
      this.search = false
    },
    searchClear: function () {
      this.text = ''
      this.$refs.searchInput.focus()
    },
    input: function () {
      this.$emit('input', this.text)
    }
  }
}
</script>