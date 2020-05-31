//app.js
var QQMapWX = require('/utils/qqmap-wx-jssdk.min.js');
App({

  data:  {  },

  onLaunch: function()  {   

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }  
  },

  globalData:  {    },

  qqmapsdk: new QQMapWX({
    key:   'XLABZ-D6XEK-UGZJQ-AJZEO-3RTAQ-A2BRP'
  }),

})