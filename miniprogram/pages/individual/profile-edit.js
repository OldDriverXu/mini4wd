const app = getApp()

import { areaList } from '@vant/area-data';

function parseQueryString(obj) {
  const result = {}
  Object.keys(obj).forEach(key => {
    result[key] = JSON.parse(obj[key])
  })

  return result;
}

Page({
  data: {
    areaList,
    showPopup: false,

    openid: '',
    // userInfo
    nickName: '',
    province: '',
    city: '',
    // carInfo
    carName: '',
    carChassis: '',
    // teamInfo
    teamName: '',
  },

  onLoad: function (options) {
    const { nickName, province, city, carName, carChassis, teamName } = parseQueryString(options)

    this.setData({
      openid: app.globalData.openid,
      nickName: nickName,
      province: province,
      city: city,
      carName: carName,
      carChassis: carChassis,
      teamName: teamName,
    })
  },

  onClick: function () {
    const db = wx.cloud.database()
    db.collection('users').where({
      _openid: app.globalData.openid
    }).update({
      data: {
        userInfo: {
          nickName: this.data.nickName,
          province: this.data.province,
          city: this.data.city,
        },
        carInfo: {
          carName: this.data.carName,
          carChassis: this.data.carChassis,
        },
        teamInfo: {
          teamName: this.data.teamName,
        }
      }
    }).then(res => {
      console.log('[数据库users] [更新记录] 成功，返回：', res)
      setTimeout(function () {
        wx.navigateBack()
      }, 2000)
    }).catch(err => {
      console.error('[数据库users] [更新记录] 失败：', err)
    })
  },

  onShowPopup: function() {
    this.setData({
      showPopup: true
    })
  },

  onClosePopup: function() {
    this.setData({
      showPopup: false
    })
  },

  onConfirm: function(e) {
    this.setData({
      province: e.detail.values[0].name,
      city: e.detail.values[1].name
    })
    this.onClosePopup()
  },

  onCancel: function() {
    this.onClosePopup()
  }
})