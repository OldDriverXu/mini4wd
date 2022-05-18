Component({
  data: {
    active: 0,
    list: [
      {
        pagePath: "/pages/home/index",
        text: "首页"
      },
      {
        pagePath: "/pages/search/index",
        text: "搜索"
      },
      {
        pagePath: "/pages/friend/index",
        text: "车友"
      },
      {
        pagePath: "/pages/setting/index",
        text: "设置"
      }
    ]
  },

  methods: {
    onChangeTab(event) {
      const index = event.detail;
      this.setData({ active: event.detail });
      console.log(index, this.data.list[index].pagePath)

      wx.switchTab({
        url: this.data.list[index].pagePath
      })
    },

    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.pagePath === `/${page.route}`)
      });
    }
  }
})