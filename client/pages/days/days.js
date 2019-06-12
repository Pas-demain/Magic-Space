Page({
  /**
   * 页面的初始数据
   */
  data: {
    dayWordList:[
      {
        imagePath:"/img/许嵩.jpg",
        dayWord: "如果场景里出现一架钢琴,我会唱歌给你听,哪怕好多盆水往下淋。",
        wordFrom:"许嵩",
        wordName:"有何不可",
        id: 167876,
        src:"https://7375-suga2019-bf32e6-1259338962.tcb.qcloud.la/许嵩 - 有何不可.mp3?sign=dba36c59db89c57996d6d69e78c9066f&t=1559822479",
        count: 0,
        zana: 0
      },
      {
        imagePath: "/img/I Dare You.jpg",
        dayWord: "So I, I, I'm picking up my sword,To shatter all the pieces that I was before,Cause I, I, I'm worth fighting for.",
        wordFrom: "Bea Miller",
        wordName: "I Dare You",
        id: 33410933,
        src: "https://7375-suga2019-bf32e6-1259338962.tcb.qcloud.la/Bea Miller - I Dare You.mp3?sign=c419eb88bca6e583bd2135beafe51495&t=1559822222",
        count: 0,
        zana:0
      },
      {
        imagePath: "/img/燕归巢.jpg",
        dayWord: "衔春的燕想归巢，沿途的景，牵挂的人，两情迢迢。",
        wordFrom: "许嵩",
        wordName: "燕归巢",
        id: 402073807,
        src: "https://7375-suga2019-bf32e6-1259338962.tcb.qcloud.la/许嵩 - 燕归巢.mp3?sign=1cabe9ce24c9f1783bc79f0281e87aad&t=1559822496",
        count: 0,
        zana: 0
      }
    ],
    beforeColor: "gray",
    afterColor: "#FF9966"
  },


  f0:function(event){
    var that = this
    var index = event.currentTarget.dataset.index
    var mes=that.data.dayWordList
    for(let i in mes){
      if(i == index){
        var collectStatus = false
        if(mes[i].zana == 0){
          collectStatus = true
          mes[i].zana = parseInt(mes[i].zana)+1
        }else{
          collectStatus = false
          mes[i].zana = parseInt(mes[i].zana)-1
        }
        wx.showToast({
          title: collectStatus? '赞' : '取消赞',
        })
      }
    }
    that.setData({
      dayWordList:mes
    })
  },


  f1:function(event){
    var dayId=event.currentTarget.dataset.dayId
    var wFrom = event.currentTarget.dataset.wFrom
    var wName = event.currentTarget.dataset.wName
    var iPath = event.currentTarget.dataset.iPath
    var mSrc = event.currentTarget.dataset.mSrc
    console.log(dayId)
    console.log(wFrom)
    console.log(wName)
    console.log(iPath)
    console.log(mSrc)

    wx:wx.navigateTo({
      url: '/pages/details/details?id='+dayId
        + '&wordFrom=' + wFrom+'&wordName='+wName+'&imagePath='+iPath+'&src='+ mSrc,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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