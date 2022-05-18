Page({
  data: {
    url: ''
  },
  onLoad: function(options) {
    const url = options.url
    console.log(options)
    this.setData({
      url: url
    })
  }
})