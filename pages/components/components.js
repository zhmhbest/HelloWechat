// pages/components/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onOuterEvent: function(event) {
    console.log("组件 外 触发", event);
  },
  onButtonClick: function (event) {
    console.log("修改组件内数据");
    //方法一
    const test_com1 = this.selectComponent("#id_forcounter1");
    test_com1.CounterPP(2);

    //方法二
    const test_com2 = this.selectComponent("#id_forcounter2");
    test_com2.setData({ counter: test_com2.data.counter+1 });
  }
})