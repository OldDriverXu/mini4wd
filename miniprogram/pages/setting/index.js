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
        name: 'login',
        data: {},
        success: res => {
          app.globalData.openid = res.result.openid

          wx.cloud.database().collection('users').where({
            _openid: res.result.openid
          }).get()
          .then(res => {
            this.setData({
              userInfo: res.data[0]?.userInfo || null,
              openid: app.globalData.openid,
              hasUserInfo: res.data.length > 0,
            })
          })
        },
        fail: err => {
          console.log('[云函数] [login] 获取 openid 失败，请检查是否有部署云函数，错误信息：', err)
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

  getUserProfile(e) {
    const db = wx.cloud.database()

    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善车友会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        if (!this.data.hasUserInfo) {
          db.collection('users').add({
            data: {
              userInfo: res.userInfo
            }
          }).then((res) => {
            console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
          }).catch(err => {
            console.error('[数据库] [新增记录] 失败：', err)
          })
        } else {
          db.collection('users').where({
            _openid: app.globalData.openid
          }).update({
            data: {
              userInfo: res.userInfo
            }
          }).then(res => {
            console.log('[数据库] [更新记录] 成功，返回：', res)
          }).catch(err => {
            console.error('[数据库] [更新记录] 失败：', err)
          })
        }

        this.setData({
          userInfo: res.userInfo,
          openid: app.globalData.openid,
          hasUserInfo: true
        })
      }
    })
  },
})