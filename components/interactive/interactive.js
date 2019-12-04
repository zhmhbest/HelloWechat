// components/interactive/interactive.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    color: { type: String, value: "#90EE90", observer: function (newVal, oldVal) { console.log(newVal, oldVal) }}
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    CounterPP: function(num) {
      this.setData({ counter: this.data.counter + num });
    }
  },

  // 监听data改变
  observers: {
    counter: function (newVal) {
      console.log("监听到couter改变", newVal);
    }
  }

})
