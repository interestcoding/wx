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
          var list = [];
          var length = data.length;
          for (var i = 0; i < length; i++) {
            var shizhi = (res.data.data[i].marketcap)
            var liang = (res.data.data[i].vol_b)
            // 根据数据格式分析，0为数字，其他为字符串，字符串需要做特殊处理
            if (shizhi != 0){
              shizhi = shizhi.replace(/,/g, "")  // 将字符串中的所有逗号替换掉
              shizhi = parseInt(shizhi)  // 将字符串转化为数字
              shizhi = Math.round(parseInt(shizhi) / 1000000) / 100  // 数字以亿为单位，四舍五入
            }
            if (liang != 0) {
              liang = liang.replace(/,/g, "")  // 将字符串中的所有逗号替换掉
              liang = parseInt(liang)  // 将字符串转化为数字
              liang = Math.round(parseInt(liang) / 10000)  // 数字以亿为单位，四舍五入
            }
            list.push({ "name": res.data.data[i].symbol, "price": res.data.data[i].rate, "shizhi": shizhi, "bi": res.data.data[i].rate_percent, "dui": res.data.data[i].curr_suffix, "dui": res.data.data[i].curr_suffix, "bi": res.data.data[i].rate_percent,"liang":liang})
          }
          
          that.setData({ 
            list:list
          })
        }
      })
  }
})