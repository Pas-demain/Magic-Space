// pages/musicdetail/musicdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    mList:[],
    mid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this 
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id='+options.id,
      success:function(res){
        console.log(res)
        that.setData({
          mlist:res.data.data,
          musicList:res.data.data.tracks
        })
        wx.hideNavigationBarLoading()
      }
    }),

  // wx.request({
  //     url: 'https://api.imjad.cn/cloudmusic/?type=song&id=' + mid +'&br=128000',
  //     success:function(res){
  //       console.log(res)
  //     }
  // })

    wx.showNavigationBarLoading()
  },

   play:function(event){
     var mId=event.currentTarget.dataset.mId
     var that = this
     wx.request({
       url: 'https://api.imjad.cn/cloudmusic/?type=song&id='+mId+'&br=128000',
       success: function (res) {
         console.log(res)
         that.setData({
           musicList:res.data.data
         })
       }
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