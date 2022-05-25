// pages/search/index.js
const computedBehavior = require('miniprogram-computed').behavior

Page({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,

    // 
    products: []

  },
  
  computed: {
    menuList(data) {
      return data.products.map(item => {
        return { title: item.catName }
      })
    },
    // productList: [{
    //   title: '锐泽DD四驱车',
    //   desc: '四驱兄弟四驱小子S2底盘拼装车',
    //   price: '20.00',
    //   img: 'https://gd3.alicdn.com/imgextra/i1/391130175/O1CN01GcGV0f1DAC1MlcuBL_!!391130175.jpg_400x400.jpg',
    //   url: 'https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-24123859273.39.616f21e7Qa0oFu&id=655687352153'
    // }, {
    //   title: '自制田宫四驱车改装配件',
    //   desc: '20周年限定 刻字玻纤维95072全覆盖式龙头',
    //   price: '4.95起',
    //   img: 'https://gd2.alicdn.com/imgextra/i3/391130175/TB2qlRssSJjpuFjy0FdXXXmoFXa_!!391130175.jpg_400x400.jpg',
    //   url: 'https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-24123859273.75.43d34222pVZnTK&id=520310228613'
    // }]
    productList(data) {
      const productList = data.products[data.activeKey]?.list || []
      return productList
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 加载商品菜单数据
    const db = wx.cloud.database()

    db.collection('productsMenu').get()
    .then(res => {
      this.setData({
        products: res.data[0]?.products || []
      })
    })
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

  onChangeSidebar(e) {
    this.setData({
      activeKey: e.detail
    })
  },

  onClickProduct(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({
      title: '复制链接，用浏览器打开',
      content: item.url,
      showCancel: false,
      confirmText: '复制',
      success(res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: item.url
          })
        }
      }
    })
  }
})