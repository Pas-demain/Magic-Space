// pages/mvdetail/mvdetail.js
var n=20
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvComList:[],
    hotComList:[],
    loading: false,
    plain: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://api.itooi.cn/music/netease/mv?key=579621905&id='+options.id,
      success:function(res){
        console.log(res)
        that.setData({
          mv:res.data.data
        })
      }
    }),

    //mv评论
    wx.request({
      url: 'https://v1.itooi.cn/netease/comment/mv?id='+options.id+'&page=0&pageSize=30',
      success:function(res){
        console.log(res)
        that.setData({
          mvComList:res.data.data.comments,
          hotComList:res.data.data.hotComments,
          comTotal:res.data.data.total
        })
        wx.hideNavigationBarLoading()
      }
    })
    wx.showNavigationBarLoading()
  },

  //加载更多评论
  loadMvCom:function(event){
    if (this.data.mvComList.length === 0) return
    n = n + 20
    var that = this
    var comId = event.currentTarget.dataset.comId
    that.setData({ loading: true })
    wx: wx.request({
      url: 'https://v1.itooi.cn/netease/comment/mv?id=' + comId + '&page='+n+'&pageSize=30',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          loading: false,
          mvComList: that.data.mvComList.concat(res.data.data.comments),
        })
      },
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