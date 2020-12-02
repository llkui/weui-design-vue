<template>
  <div>
    <div v-if="isSwipe" class="weui-cell weui-cell_swiped" weui-swipe>
      <div class="weui-cell__bd" style="transform: translateX(-68px)">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>{{ title }}</p>
          </div>
          <div class="weui-cell__ft">{{ label }}</div>
        </div>
      </div>
      <div class="weui-cell__ft">
        <a class="weui-swiped-btn weui-swiped-btn_warn" href="javascript:"
          >删除</a
        >
      </div>
    </div>
    <div v-if="!isLink && !isSwipe" class="weui-cell weui-cell_example">
      <div class="weui-cell__hd">
        <img
          :src="icon"
          alt=""
          style="width: 20px; margin-right: 16px; display: block"
        />
      </div>
      <div class="weui-cell__bd">
        <p>{{ title }}</p>
      </div>
      <div class="weui-cell__ft">{{ label }}</div>
    </div>
    <a
      v-if="isLink"
      class="weui-cell weui-cell_access weui-cell_example"
      href="javascript:" @click="clickLink()"
    >
      <div class="weui-cell__hd">
        <img
          :src="icon"
          alt=""
          style="width: 20px; margin-right: 16px; display: block"
        />
      </div>
      <div class="weui-cell__bd">
        <p>{{ title }}</p>
      </div>
      <div class="weui-cell__ft">{{ label }}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "WeuiCell", // 注意这个name是必须的
  props: {
    title: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    isSwipe: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickLink() {
      this.$emit('click');
    }
  }
};
</script>