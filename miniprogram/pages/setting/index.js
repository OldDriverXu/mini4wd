// pages/setting/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    openid: null,
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 设置Tabbar
    this.getTabBar().init()
    // 获取登录信息
    if (!app.globalData.openid) {
      wx.cloud.callFunction({
        name: 'login2',
        data: {}
      }).then(res => {
        app.globalData.openid = res.result.openid

        if (res.result.code == 0) {
          this.setData({
            openid: res.result.openid,
            userInfo: res.result.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onClickLogin() {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善车友会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (r) => {
        wx.cloud.callFunction({
          name: 'register',
          data: {
            userInfo: r.userInfo
          }
        }).then(res => {
          if (res.result.code == 0) {
            this.setData({
              openid: res.result.openid,
              userInfo: res.result.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    })
  },
})