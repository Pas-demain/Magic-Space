// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    releaseFocus: false,
    content:"",
  },

  change:function(event){
    var value = event.detail.value
    this.setData({
      content:value
    })
  },

  sure:function(event){
    this.setData({
     cgv: this.data.content
    })
    console.log(this.data.content)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    // console.log(options.wordFrom)
    // console.log(options.wordName)
    // console.log(options.imagePath)
    console.log(options.src)
    this.setData({
      mid: options.id,
      // wfrom:options.wordFrom,
      // wname: options.wordName,
      // ipath: options.imagePath,
      msrc: options.src
    })

    var that = this

    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=lyric&id=' + options.id,//9208
      method:"GET",
      data: {
         
      },
      header: {
        "content-type": "json"
      },
      success:function(res) {
        console.log(res)
        that.setData({
          word: res.data
        })
        wx.setNavigationBarTitle({
          title: options.wordName+"--"+options.wordFrom,
        })
        wx.hideNavigationBarLoading()
      }
    }),
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=detail&id='+options.id,
      data: '',
      success: function(res) {
        console.log(res)
        that.setData({
          minfo:res.data.songs["0"],
          martist:res.data.songs["0"].ar["0"].name
        })
      },
    })
    wx.showNavigationBarLoading()
  },
  
  comSubmit:function(e){
    this.setData({
      releaseFocus: true
    })
  },

  lyricMain:function(e){
    this.setData({
      releaseFocus:false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})