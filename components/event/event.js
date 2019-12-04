// components/event/event.js
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
    onButtonClick_inner: function(event) {
      console.log("组件 内 事件");
    },
    onButtonClick_outer: function (event) {
      //触发方法 传递参数 options
      this.triggerEvent("outerevent", event, {});
      //console.log("组件 外 触发");
    }
  }
})
