// pages/open/open.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    whatPrint: 0,
    userInfo: null
  },

  onLoad: function () {
    switch (app.globalData.userInfoType) {
      case 0:
        if (wx.canIUse('button.open-type.getUserInfo')) {
          this.setData({ whatPrint: 0 });
        } else {
          this.setData({ whatPrint: 2 });
          app.globalData.userInfoType = 2;
        }
        console.log("用户数据：待获取");
        break;
      case 1:
        this.setData({
          whatPrint: 1,
          userInfo: app.globalData.userInfo
        });
        console.log("用户数据：可用");
        break;
      case 2:
        this.setData({ whatPrint: 2 });
        console.log("用户数据：没有权限");
        break;
    }
  },

  getUserInfo: function (info) {
    console.log(info)
    app.globalData.userInfoType = 1;
    app.globalData.userInfo = info.detail.userInfo; //传递到全局
    this.setData({
      whatPrint: 1,
      userInfo: app.globalData.userInfo
    });
  }
})