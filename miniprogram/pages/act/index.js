Page({
  data: {
    actList: [],
  },

  onLoad: function() {
    // 加载活动list数据
    const db = wx.cloud.database()

    db.collection('activities').get()
    .then(res => {
      this.setData({
        actList: res.data[0]?.list || []
      })
    })
  },

  onClickAct: function(e) {
    const { aid } = e.currentTarget.dataset.item
    console.log(aid)
    wx.navigateTo({
      url: '/pages/article/index?aid='+ aid
    })
  }
})