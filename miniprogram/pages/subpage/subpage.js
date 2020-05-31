// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  jumpComment: function (event) {
    var path = "/pages/subpage/subpage";
    wx.navigateTo({
      url: path,
    })
  },
  getWeater: function () {
    var that = this
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/forecast?',
      data: {
        location: that.data.loc,
        key: '4f1e68ea59e04a3c811e850da17f43fb'
      },
      success: function (res) {
        console.log(res.data.HeWeather6[0])
        that.setData({
          province: res.data.HeWeather6[0].basic.admin_area,
          city: res.data.HeWeather6[0].basic.parent_city,
          ins: res.data.HeWeather6[0].basic.location,
          daily_forecast: res.data.HeWeather6[0].daily_forecast[0],
          daily_forecast1: res.data.HeWeather6[0].daily_forecast[1],
          daily_forecast2: res.data.HeWeather6[0].daily_forecast[2]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)
        var locat = res.latitude.toString() + "," + res.longitude.toString()
        console.log(locat)
        that.data.loc = locat
        that.getWeater()
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})