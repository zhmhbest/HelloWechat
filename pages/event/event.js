// pages/event/event.js
Page({

  data: {
    capture_mode: false
  },


  onButtonClick_catch() {
    console.log("onButtonClick_catch");
  },
  onButtonClick_bind() {
    console.log("onButtonClick_bind");
  },


  onButtonClick_quick() {
    console.log("onButtonClick_quick");
  },
  onButtonClick_long() {
    console.log("onButtonClick_long");
  },


  onTouchStart() {
    console.log("onTouch");
  },
  onMove() {
    console.log("onMove");
  },
  onTouchEnd() {
    console.log("onTouchEnd");
  },

  onButton_event1(event) {
    console.log("event1", event);
    // console.log("事件类型", event.type);
    // console.log("页面计时", event.timeStamp);

    // console.log("触发组件属性集合", event.target);
    // console.log("当前组件属性集合", event.currentTarget);

    // console.log("触摸点集合", event.touches);
    // console.log("变化的触摸点集合", event.changedTouches);
  },
  onButton_event2(event) {
    console.log("event2", event);
  },

  onButtonArray(event) {
    const dataset = event.currentTarget.dataset;
    console.log("onButtonArray", dataset.index, dataset.item);
  },


  setCaptureMode() {
    this.setData({
      capture_mode: !this.data.capture_mode
    });
  },
  onCapture(event) {
    const dataset = event.currentTarget.dataset;
    console.log("onCapture", dataset.item);
  },
  onTap(event) {
    const dataset = event.currentTarget.dataset;
    console.log("onBind", dataset.item);
  }

})