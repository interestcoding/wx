//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '关于我的!',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(userInfo => this.setData({ userInfo }))
    wx.request({
      url: 'http://127.0.0.1:5000/',
      method: 'GET',
      success: function (res) {
        wx.hideLoading();
        var data = res.data
        console.log(data)
        that.setData({
          data: data
        })
      }
    })
  }
})
