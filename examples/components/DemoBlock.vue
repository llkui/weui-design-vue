<template>
  <div :class="blockClass" class="demo-block">
    <!-- 源码运行 -->
    <div class="source">
      <slot name="source"></slot>
    </div>
    <!-- 源码 -->
    <div class="meta" ref="meta">
      <!-- 描述 -->
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <!-- 源码 -->
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <!-- 源码 显示或者隐藏 -->
    <div
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
      class="demo-block-control"
      ref="control"
    >
      <transition name="text-slide">
        <span>{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    }
  },

  computed: {
    lang () {
      return this.$route.path.split('/')[1]
    },

    blockClass () {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path
        .split('/')
        .pop()}`
    },
    controlText () {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    codeArea () {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight () {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return (
          this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('highlight')[0].clientHeight +
          20
        )
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    }
  },
  watch: {
    isExpanded (val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      // console.log(this.$el.getElementsByClassName('description').length)
      // console.log(this.$el.getElementsByClassName('highlight'))
      // console.log(this.codeAreaHeight)
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
      }
    }
  }
}
</script>
<style lang="scss">
.demo-block {
  padding: 8px 16px;
  margin-top: 10px;
  border-left: solid 5px#17171d;
  background-color: #ededed;
  border-radius: 3px;
  transition: 0.2s;
  background-color: var(--weui-BG-0);
  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .meta {
    margin-top: 10px;
    background-color: #fafafa;
    border-radius: 8px;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    p {
      width: 100%;
    }
  }
  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    margin-top: 10px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: var(--weui-BRAND);
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>