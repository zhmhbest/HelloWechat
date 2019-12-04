// components/first/first.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 监听所在页面的生命周期
  pageLifetimes: {
    show: function () {
      console.log("com: show");
    },
    hide: function () {
      console.log("com: hide");
    },
    resize: function () {
      console.log("com: resize");
    }
  },

  // 监听组件声明周期
  lifetimes: {
    created: function () {
      console.log("com: created");
    },
    attached: function () {
      console.log("com: attached");
    },
    ready: function () {
      console.log("com: ready");
    },
    moved: function () {
      console.log("com: moved");
    },
    detached: function () {
      console.log("com: detached");
    }
  }
})
