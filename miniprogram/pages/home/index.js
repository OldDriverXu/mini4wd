Page({
  data: {
    defaultBanner: '../../images/banner/home-banner.png',
    bannerList: [],
    news: null,
  },

  onLoad: function() {
    // 设置Tabbar
    this.getTabBar().setData({
      active : 0
    })

    const db = wx.cloud.database()
    // 加载banner广告位数据
    db.collection('banner').where({
      position: 'home'
    })
    .field({
      list: true,
      _id: false,
    })
    .get()
    .then(res => {
      this.setData({
        bannerList: res.data[0].list
      })
    })

    // 加载咨询位数据
    db.collection('banner').where({
      position: 'news'
    }).get()
    .then(res => {
      this.setData({
        news: {
          text: res.data[0].list[0].title,
          aid: res.data[0].list[0].aid,
        }
      })
    })


  },

  onShow: function () {
    // 设置Tabbar
    this.getTabBar().init()
  },

  onShareAppMessage: function () {
    return {
      title: '街头迷你四驱车友',
      imageUrl: '../../images/streetmini4wd-china.jpg',
      path: '/pages/home/index'
    }
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

  onClickBtn: function(e) {
    const name = e.currentTarget.dataset.name
    console.log(name)
    switch (name) {
      case 'intro':
        wx.navigateTo({
          url: '/pages/article/index?aid=1'
        })
        break
      case 'rule':
        wx.navigateTo({
          url: '/pages/article/index?aid=2'
        })
        break;
      case 'act':
        wx.navigateTo({
          url: '/pages/act/index'
        })
        break
      case 'sale':
        wx.navigateTo({
          url: '/pages/sale/list'
        })
        break
      case 'model':
        wx.navigateTo({
          url: '/pages/model/list'
        })
        break
    }
  },

  onClickNews: function(e) {
    const news = e.currentTarget.dataset.news
    wx.navigateTo({
      url: '/pages/article/index?aid=' + news.aid
    })
  }
})