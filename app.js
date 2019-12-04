//app.js
App({

  onLaunch: function () {
    console.info("onLaunch：当小程序初始化完成时（全局只触发一次）");
    /**
     * wx接口
     */
    wx.login({
      success: code => {
        console.log("wx接口：登录成功！");
      }
    });
    // 小程序获得 code 交给自己的服务器
    // 服务器拿 code, appid, appsecret 去和微信服务器换 session, openid
    wx.getSetting({
      success: res => {
        console.log("wx接口：获取数据成功！");
        if (res.authSetting['scope.userInfo']) { 
          //已有授权不需要弹窗
          wx.getUserInfo({
            success: info => {
              this.globalData.userInfo = info.userInfo;
              this.globalData.userInfoType = 1;
              // 可能会在 Page.onLoad 之后才返回，加入 callback 以防止这种情况。
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: info => {
              wx.navigateTo({ url: "/pages/userinfo/userinfo" });
            }
          })
        } else {
          //跳转到自定义弹窗授权
          wx.navigateTo({ url: "/pages/userinfo/userinfo" });
        }
      }
    });
  },

  onShow: function (options) {
    console.info("onShow：当小程序启动，或从后台进入前台显示");
  },

  onHide: function () {
    console.info("onHide：当小程序从前台进入后台");
  },

  onError: function (msg) {
    console.info("onError：当小程序发生脚本错误，或者 api 调用失败时");
  },

  /**
   * 全局变量
   */
  globalData: {
    userInfoType: 0, //type 0: 需要判断; 1: 可以正常使用; 2: 没有权限使用
    userInfo: null
  },

})
