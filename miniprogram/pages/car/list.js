const localData = require('../data/car.js')


Page({
  data: {
    option: [
      { text: '发售日期↓', value: 'time-down' },
      { text: '发售日期↑', value: 'time-up' },
    ],
    value: 'time-down',
    carList: []
  },
  
  onLoad() {
    this.setData({
      carList: localData.data
    })
  },

  onChangeOption(v) {
    console.log(v)
    if (v.detail == 'time-down') {
      this.setData({
        carList: localData.data
      })
    }

    if (v.detail == 'time-up') {
      this.setData({
        carList: localData.data.slice().reverse()
      })
    }
  }
})