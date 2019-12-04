// pages/home/home.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onButtonClick_userinfo: function () {
    wx.navigateTo({ url: "/pages/userinfo/userinfo" });
  },
  onButtonClick_mlss : function() {
    wx.navigateTo({
      url: "/pages/wx_mlss/wx_mlss",
      success: function () { console.log("navigateTo success"); },
      fail: function () { console.log("navigateTo fail"); },
      complete: function () { console.log("navigateTo complete"); }
    });
  },
  onButtonClick_event : function () {
    wx.navigateTo({ url: "/pages/event/event" });
  },
  onButtonClick_wxapi: function () {
    wx.navigateTo({ url: "/pages/wxapi/wxapi" });
  },
  onButtonClick_com: function () {
    wx.navigateTo({ url: "/pages/components/components" });
  },

})