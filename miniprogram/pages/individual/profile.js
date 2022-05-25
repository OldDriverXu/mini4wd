const app = getApp()

function buildUrl(obj) {
  const querystring = Object.keys(obj).map(key => {
    return key + '=' + JSON.stringify(obj[key])
  }).join('&')

  return querystring
}

Page({
  data: {
    openid: '',
    // userInfo
    nickName: '',
    province: null,
    city: null,
    // carInfo
    carName: null,
    carChassis: null,
    // teamInfo
    teamName: null,
  },

  onShow: function () {
    wx.cloud.database().collection('users')
      .where({
        _openid: app.globalData.openid
      })
      .get()
      .then(res => {
        const result = res.data[0];
        this.setData({
          openid: app.globalData.openid,
          nickName: result?.userInfo?.nickName || null,
          province: result?.userInfo?.province || null,
          city: result?.userInfo?.city || null,
          carName: result?.carInfo?.carName || null,
          carChassis: result?.carInfo?.carChassis || null,
          teamName: result?.teamInfo?.teamName || null,
        })
      })
  },

  onClick: function () {
    wx.navigateTo({
      url: '/pages/individual/profile-edit?' + buildUrl({
        ...this.data
      })
    })
  }
})

