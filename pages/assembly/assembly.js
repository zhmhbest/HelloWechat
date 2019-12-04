// pages/assembly/assembly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mustachetest_nowtime: new Date().toLocaleString(),
    innerAudio: null
  },

  onButtonClick: function (event) {
    console.log("button click");
  },
  onLoad: function (options) {
    console.log("onLoad: 页面加载");
    setTimeout(function(){
      console.log("5秒后的哈哈哈");
    }, 5000);
    setInterval(() => {
      this.setData({
        mustachetest_nowtime: new Date().toLocaleString()
      })
    }, 1000);
  },

  audiotest_Setting: function () {
    var innerAudioContext;
    if (null == this.data.innerAudio) {
      innerAudioContext = wx.createInnerAudioContext();
      this.setData({ innerAudio: innerAudioContext });
    } else {
      innerAudioContext = this.data.innerAudio;
    }
    innerAudioContext.autoplay = false;
    innerAudioContext.src = '/assets/music/烟花易冷.wav';
    innerAudioContext.onPlay(() => {
      console.log('开始播放');
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    console.log('设置完成');
  },
  audiotest_Play: function () {
    this.data.innerAudio.play();
  },
  audiotest_Pause: function () {
    this.data.innerAudio.pause();
  },
  audiotest_Stop: function () {
    this.data.innerAudio.stop();
  },
  audiotest_Position: function () {
    this.data.innerAudio.seek(5);
  },
  audiotest_Start: function () {
    this.data.innerAudio.seek(0);
  },


  bindKeyInput(evnet) {
    console.log("bindKeyInput");
  },


  onReady: function () {
    console.log("onReady: 初次渲染完成");
  },
  onShow: function () {
    console.log("onShow: 页面显示");
  },
  onHide: function () {
    console.log("onHide: 页面隐藏");
  },
  onUnload: function () {
    console.log("onUnload: 页面卸载");
  },
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh: 用户下拉动作");
  },
  onReachBottom: function () {
    console.log("onReachBottom: 页面上拉触底事件");
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage: 用户点击分享");
  }
})