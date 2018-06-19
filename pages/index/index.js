var app = getApp()
Page({
  data:{
    list:[]
  },
  onLoad: function () {
    var that = this;
      wx.request({
      url: 'https://data.gateio.io/api2/1/marketlist',
        method: 'GET',
        success: function (res) {
          wx.hideLoading();
          var data = res.data.data;
          var item =[];
          list: []
          var length = data.length;
          for (var i = 0; i < 1; i++) {
            item.push(res.data.data[i].symbol),
            item.push(res.data.data[i].pair),
            item.push(res.data.data[i].rate),
            item.push(res.data.data[i].marketcap),
            item.push(res.data.data[i].rate_percent),
            item.push(res.data.data[i].curr_suffix)
            console.log(item)
          }
          that.setData({ 
            item:item
          })
        }
      })
  }
})