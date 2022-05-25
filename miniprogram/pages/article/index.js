const WxParse = require('../../wxParse/wxParse.js')

Page({
  data: {
    title: null,
    content: null
  },

  onLoad: function(options) {
    const aid = options.aid
    const that = this

    // 加载文章数据
    const db = wx.cloud.database()

    db.collection('articles').where({
      aid: aid
    })
    .get()
    .then(res => {
      let title = res.data[0].title
      let content = res.data[0].content

      wx.setNavigationBarTitle({
        title: title
      })
      WxParse.wxParse('content', 'html', content, that, 5)
    })
  }
})