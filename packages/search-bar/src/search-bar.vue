<template>
  <div
    :class="search ? 'weui-search-bar_focusing' : ''"
    class="weui-search-bar"
  >
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          class="weui-search-bar__input"
          placeholder="搜索"
          ref="searchInput"
          required
          type="search"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
          v-on:blur="blur()"
        />
        <a
          @click="searchClear()"
          class="weui-icon-clear"
          href="javascript:"
        ></a>
      </div>
      <label @click="searchText()" class="weui-search-bar__label">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a
      @click="searchCancel()"
      class="weui-search-bar__cancel-btn"
      href="javascript:"
      >取消</a
    >
  </div>
</template>
<script lang="ts">
export default {
  name: "WeuiSearchBar",
};
</script>
<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue"

const props = defineProps({
  value: {
    type: String,
    default: null,
  },
});

const emits = defineEmits(["input"]);

const search = ref(false);
const searchInput = ref(null);

const searchText = () => {
  search.value = true
  searchInput.value.focus()
}

const searchCancel = () => {
  search.value = false
  emits('input', '')
}

const searchClear = () => {
  searchInput.value.focus()
  emits('input', '')
}

const blur = () => {
  console.log(props.value);
  if (props.value.length === 0) {
    search.value = false
  }
}
</script>