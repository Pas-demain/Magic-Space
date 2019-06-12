// pages/notes/notes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comList:[]
  },
  comClick:function(event){
    var that = this
    var comId = event.currentTarget.dataset.comId
    wx:wx.request({
      url: 'https://news-at.zhihu.com/api/4/story/'+comId+'/comments',
      success: function(res) {
        console.log(res)
        that.setData({
          comList: res.data.comments
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx:wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/'+options.id,
      header: {},
      success: function(res) {
        console.log(res)
        if(res.data.body){
          var body=res.data.body
          body = body.match(/(<p>.*?<\/p>)|(.*?<\/?span>)/g)
          var ss=[]
          if(body){
            for (var i = 0, len = body.length; i < len; i++) {
              ss[i] = /<img.*?>/.test(body[i]);
              if (ss[i]) {
                body[i] = body[i].match(/(http:|https:).*?\.(jpg|jpeg|gif|png)/);
              } else {
                body[i] = body[i].replace(/<p>/g, '')
                  .replace(/<\/p>/g, '\n')
                  .replace(/<span class=".*?">/g, '')
                  .replace(/<\/?span>/g,'<br>')
                  .replace(/<\/b>/g, '')
                  .replace(/<b>/g, '')
                  .replace(/<\/?i>/g, '')
                  .replace(/<strong>/g, '')
                  .replace(/<\/strong>/g, '')
                  .replace(/<a.*?\/a>/g, '')
                  .replace(/&nbsp;/g, ' ')
                  .replace(/&ldquo;/g, ' ')
                  .replace(/&rdquo;/g, ' ')
                  .replace(/<div class=".*?">/g, '')
                  .replace(/<a href=".*?">/g, '')
                  .replace(/<br>/g, '')
                  .replace(/，/ig,"")
              }
            }
          }
          res.data.body=body
        }
        that.setData({
        note:res.data
        })
        wx.hideNavigationBarLoading()
      },
    })
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/story-extra/'+options.id,
      success:function(res){
        console.log(res)
        that.setData({
          com:res.data
        })
      }
    })
    wx.showNavigationBarLoading()
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