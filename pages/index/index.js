//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isstyle:"",
    urlarr: ['../twopage/twopage'],
    per:25
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../template/template'
    })
  },
  select: function (options){
    var id = options.currentTarget.dataset.id;
    this.setData({
      isstyle: id
    }) 
  },
  next: function () {
    //var that = this;
    this.setData({
      per:25
    })
    console.log(this.data.per)
    var url = this.data.urlarr[0];
    console.log(url)
    wx.navigateTo({
      url: '../twopage/twopage'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
