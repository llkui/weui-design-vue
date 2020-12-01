<template>
  <div v-if="show">
    <div class="weui-mask weui-animate-fade-in"></div>
    <div class="weui-half-screen-dialog weui-picker weui-animate-slide-up">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button class="weui-icon-btn weui-icon-btn_close weui-picker__btn">
            关闭
          </button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">单列选择器</strong>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <div class="weui-picker__bd">
          <div class="weui-picker__group">
            <div class="weui-picker__mask"></div>
            <div class="weui-picker__indicator"></div>
            <div
              class="weui-picker__content"
            >
              <template v-for="(item, index) in options">
                <div v-if="!item.disable" class="weui-picker__item" :key="index">{{item.label}}</div>
                <div v-if="item.disable" class="weui-picker__item weui-picker__item_disabled" :key="index">{{item.label}}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-half-screen-dialog__ft">
        <a
          href="javascript:;"
          class="weui-btn weui-btn_primary weui-picker__btn"
          id="weui-picker-confirm"
          data-action="select"
          >确定</a
        >
      </div>
    </div>
  </div>
</template>
<script>
// import $ from './util.js';
// import cron from './cron.js';
// import './scroll.js';
// import * as util from './util.js';

export default {
  name: "WeuiPicker",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    groups: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>