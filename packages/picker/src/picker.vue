<template>
  <div :style="visible ? 'opacity: 1;' : 'opacity: 0; display: none;'">
    <div @click="close('mask')" class="weui-mask weui-animate-fade-in"></div>
    <div class="weui-half-screen-dialog weui-picker weui-animate-slide-up">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button
            @click="close('icon')"
            class="weui-icon-btn weui-icon-btn_close weui-picker__btn"
          >关闭</button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">{{title}}</strong>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <div class="weui-picker__bd">
          <picker-item
            :group="group"
            :index="index"
            :key="index"
            :selectedIndex.sync="selectedIndex[index]"
            v-for="(group, index) in groups"
          ></picker-item>
        </div>
      </div>
      <div class="weui-half-screen-dialog__ft">
        <a
          @click="confirm()"
          class="weui-btn weui-btn_primary weui-picker__btn"
          data-action="select"
          href="javascript:;"
        >确定</a>
      </div>
    </div>
  </div>
</template>
<script>
import PickerItem from './picker-item'

export default {
  name: "WeuiPicker",
  components: {
    'picker-item': PickerItem
  },
  data () {
    return {
      visible: false,
      type: 'default',
      title: null,
      maskClosable: true,
      showClose: true,
      depth: 1,
      groups: [],
      options: [],
      selectedIndex: [0],
      resolve: null
    };
  },
  methods: {
    initDepth: function (index) {
      // 根据层级是否初始化完成
      if (index + 1 < this.depth) {
        this.groups.push(this.groups[index][this.selectedIndex[index]].children)
        this.initDepth(index + 1)
      }
    },
    close: function (type) {
      if (type === 'icon' || this.maskClosable) {
        this.visible = false
      }
    },
    confirm: function () {
      this.visible = false
      const selected = [];
      for (let i = 0; i < this.depth; i++) {
        if (this.selectedIndex[i] >= 0 && this.selectedIndex[i] < this.groups[i].length) {
          selected.push(this.groups[i][this.selectedIndex[i]])
        } else {
          selected.push(null)
        }
      }
      if (this.type === 'default') {
        this.resolve(selected)
      } else {
        this.resolve(`${selected[0].value}-${selected[1].value}-${selected[2].value}`)
      }
    },
    show: function (config) {
      this.type = 'default'
      this.title = config.title ? config.title : null
      this.maskClosable = config.maskClosable ? config.maskClosable : true
      this.showClose = config.showClose ? config.showClose : true
      this.depth = config.depth ? config.depth : 1
      this.groups = [];
      this.groups.push(config.options)
      this.selectedIndex = config.default ? config.default : [0]

      this.visible = true

      // 根据数据层级初始化数据（每一层每一层初始化）
      this.initDepth(0)

      return new Promise((resolve) => {
        this.resolve = resolve
      })
    },
    showDate: function (config) {
      this.type = 'date'
      this.title = config.title ? config.title : null
      const dateAll = this.getAllDateCN(new Date(config.start), new Date(config.end))
      if (dateAll.length === 0) {
        console.error('请传入正常的start和end')
        return new Promise((resolve) => {
          this.resolve = resolve
        })
      }
      const yearIndex = dateAll.findIndex(item => item.value === config.default[0])
      if (yearIndex === -1) {
        console.error('默认日期不在日期范围内')
        return new Promise((resolve) => {
          this.resolve = resolve
        })
      }
      const monthIndex = dateAll[yearIndex].children.findIndex(item => item.value === config.default[1])
      if (monthIndex === -1) {
        console.error('默认日期不在日期范围内')
        return new Promise((resolve) => {
          this.resolve = resolve
        })
      }
      const dayIndex = dateAll[yearIndex].children[monthIndex].children.findIndex(item => item.value === config.default[2])
      if (dayIndex === -1) {
        console.error('默认日期不在日期范围内')
        return new Promise((resolve) => {
          this.resolve = resolve
        })
      }
      this.depth = 3
      this.groups = [];
      this.groups.push(dateAll)
      this.selectedIndex = [yearIndex, monthIndex, dayIndex]

      this.visible = true

      // 根据数据层级初始化数据（每一层每一层初始化）
      this.initDepth(0)

      return new Promise((resolve) => {
        this.resolve = resolve
      })
    },
    getAllDateCN: function (startTime, endTime) {
      const dateAll = []
      while ((endTime.getTime() - startTime.getTime()) >= 0) {
        const year = startTime.getFullYear()
        const month = startTime.getMonth() + 1
        const day = startTime.getDate()
        const hasYear = dateAll.find(item => item.value === year)
        if (hasYear) {
          const hasMonth = hasYear.children.find(item => item.value === month)
          if (hasMonth) {
            hasMonth.children.push({
              label: day + '日',
              value: day
            })
          } else {
            hasYear.children.push({
              label: month + '月',
              value: month,
              children: [{
                label: day + '日',
                value: day
              }]
            })
          }
        } else {
          dateAll.push({
            label: year + '年',
            value: year,
            children: [{
              label: month + '月',
              value: month,
              children: [{
                label: day + '日',
                value: day
              }]
            }]
          })
        }
        startTime.setDate(startTime.getDate() + 1)
      }
      return dateAll
    }
  },
};
</script>