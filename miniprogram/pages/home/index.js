Page({
  data: {
    defaultBanner: '../../images/home/defaultBanner.png',
    bannerList: [],
  },

  onLoad: function() {
    // 设置Tabbar
    this.getTabBar().setData({
      active : 0
    })
    // 加载banner广告位数据
    const db = wx.cloud.database()
   
    db.collection('banner').where({
      position: '1'
    })
    .field({
      list: true,
      _id: false,
    })
    .get()
    .then(res => {
      console.log(res.data[0].list)
      this.setData({
        bannerList: res.data[0].list
      })
    })
  },

  onShow: function () {
    // 设置Tabbar
    this.getTabBar().init()
  },

  onClickBanner: function(event) {
    const {url} = event.currentTarget.dataset.item

    console.log(url)
    // 个人开发者用不了web-view
    // wx.navigateTo({
    //   path: 'pages/webview/index',
    //   src: url
    // })
  },
})