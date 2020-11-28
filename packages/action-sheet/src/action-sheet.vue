<template>
  <div>
    <template v-if="type == 'ios'">
      <div
        class="weui-mask"
        :style="visible ? 'opacity: 1' : 'opacity: 0; display: none;'"
        @click="close()"
      ></div>
      <div
        class="weui-actionsheet"
        :class="visible ? 'weui-actionsheet_toggle' : ''"
      >
        <div class="weui-actionsheet__title">
          <p class="weui-actionsheet__title-text">
            {{ title }}
          </p>
        </div>
        <div class="weui-actionsheet__menu">
          <div
            v-for="(menu, index) of menus"
            :key="index"
            class="weui-actionsheet__cell"
            :class="menu.type == 'warn' ? 'weui-actionsheet__cell_warn' : ''"
            @click="select(index)"
          >
            {{ menu.text }}
          </div>
        </div>
        <div class="weui-actionsheet__action">
          <div class="weui-actionsheet__cell" @click="close()">
            {{ cancelText }}
          </div>
        </div>
      </div>
    </template>
    <template v-if="type == 'android'">
      <div
        class="weui-skin_android"
        id="androidActionsheet"
        :style="visible ? 'opacity: 1' : 'opacity: 0; display: none;'"
      >
        <div class="weui-mask" @click="close()"></div>
        <div class="weui-actionsheet">
          <div class="weui-actionsheet__menu">
            <div
              v-for="(menu, index) of menus"
              :key="index"
              class="weui-actionsheet__cell"
              @click="select(index)"
            >
              {{ menu.text }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'WeuiActionSheet',
  data() {
    return {
      visible: false,
      type: '',
      title: '',
      cancelText: '',
      maskClosable: true,
      menus: [],
      resolve: null,
    }
  },
  methods: {
    show: function (config, menus) {
      this.type = config.type ? config.type : 'ios'
      this.title = config.title ? config.title : ''
      this.cancelText = config.cancelText ? config.cancelText : '取消'
      this.maskClosable =
        config.maskClosable !== undefined ? config.maskClosable : true
      this.menus = menus
      this.visible = true
      return new Promise((resolve) => {
        this.resolve = resolve
      })
    },
    close: function () {
      if (this.maskClosable) {
        this.visible = false
      }
    },
    select: function (value) {
      this.visible = false
      this.resolve(value)
    },
  },
}
</script>