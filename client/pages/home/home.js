var app = getApp()
var i = 0
var utils = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 精选页面
    oneList:[],
    oneSwiperList:[],
    loading: false,
    plain: false,
    twoList:[],
    threeList:[],

    navbar:['日报','视频','音乐'],
    currentTab: 0,
    beforeColor:"white",
    afterColor:"#FF9966"
  },

  // 置顶导航栏
  navbarTap:function(e){
    console.debug(e);
    this.setData({
      currentTab:e.currentTarget.dataset.idx
    })
  },
  //点击进入日报详情页
  newNotes:function(event){
    var noteId=event.currentTarget.dataset.noteId
    console.log(noteId)
    wx.navigateTo({
      url: '/pages/notes/notes?id='+noteId,
    })
  },

  //日报页面加载更多
  loadMore:function(event){
    if(this.data.oneList.length === 0)return
    var date=this.getNextDate()
    var that=this
    that.setData({loading:true})
    wx:wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + (Number(utils.formatDate(date)) + 1),
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          loading: false,
          oneList: that.data.oneList.concat(res.data.stories)
        })
      },
    })
  },
  getNextDate() {
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    //日报的api接口
    wx:wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      data: '',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res)
        that.setData({
        oneSwiperList: res.data.top_stories,
        oneList:res.data.stories
        })
      },
    }),
    this.index=1


    //视频的api
    wx.request({
      url: 'https://api.itooi.cn/music/netease/topMvList?key=579621905&limit=10&offset=0',
      success:function(res){
        console.log(res)
        that.setData({
          twoList:that.data.twoList.concat(res.data.data)
        })
      }
    }),

    //音乐歌单页面
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList/user?uid=396153441',
      success:function(res){
        console.log(res)
        that.setData({
          info:res.data.data.length,
          threeList: that.data.threeList.concat(res.data.data)
        })
      }
    })

  },

//点击进入mv详情页
  mvdetail: function (event) {
    var mvId = event.currentTarget.dataset.mvId
    console.log(mvId)
    wx.navigateTo({
      url: '/pages/mvdetail/mvdetail?id=' + mvId,
    })
  },
//加载更多mv
  loadMv:function(event){
    if (this.data.twoList.length === 0) return
    i = i + 10
    var that = this
    that.setData({ loading: true })
    wx: wx.request({
      url: 'https://api.itooi.cn/music/netease/topMvList?key=579621905&limit=10&offset=' + i,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          loading: false,
          twoList: that.data.twoList.concat(res.data.data)
        })
      },
    })
  },

  //点击进入歌单详情页
  musicDetail:function(event){
    var musicId = event.currentTarget.dataset.musicId
    console.log(musicId)
    wx.navigateTo({
      url: '/pages/musicdetail/musicdetail?id='+musicId,
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