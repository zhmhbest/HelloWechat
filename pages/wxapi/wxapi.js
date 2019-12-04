// pages/wxapi/wxapi.js
import httprequest from "./httprequest.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onButtonRequest: function () {
    // this.apitest_request();
    httprequest('http://127.0.0.1/entity/FileAccess/index.php?loadpath=F%3A%5CMedia%5CDocuments%5Cfor-Help.bat', {}).
    then( res => {
      console.log(res);
    }).catch(res => {
      console.log('失败');
    });
  },

  onButtonArray1: function (event) {
    const dataset = event.currentTarget.dataset;
    wx.showToast({
      title: 'icon吐司',
      icon: dataset.item,
      image: '',
      duration: 800,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
  }, 

  onButtonArray2: function (event) {
    const dataset = event.currentTarget.dataset;
    wx.showToast({
      title: 'image吐司',
      icon: '',
      image: dataset.item,
      duration: 800,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });
  },

  onButtonMoudle: function (event) {
      wx.showModal({
        title: '提示标题1-确定、取消',
        content: '提示内容',
        showCancel: true,
        cancelText: '取消',
        cancelColor: 'red',
        confirmText: '确认',
        confirmColor: 'blue',
        success: function (res) { 
          if( res.confirm ) {
            console.log('点击-确认');   
          } else {
            console.log('点击-取消');   
          }
        },
        fail: function (res) {},
        complete: function(res) {},
      });
    wx.showModal({
      title: '提示标题2-只能确定',
      content: '提示内容',
      showCancel: false,
      cancelText: '取消',
      cancelColor: 'red',
      confirmText: '确认',
      confirmColor: 'blue',
      success: function (res) {
        console.log('点击-确认');
      },
      fail: function (res) { },
      complete: function (res) { },
    });
  },

  onButtonLoading: function (event) {

    wx.showLoading({
      title: '加载中标题',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
  },

  onShareAppMessage: function () {
    console.log("onShareAppMessage: 用户点击分享");
    return {
        title: "分享时标题"
    };
  },
  onButtonList: function (event) {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log("按钮列表", res.tapIndex);
      },
      fail(res) {
        console.log(res.errMsg);
      }
    })
  }

})