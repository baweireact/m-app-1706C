// pages/detail/detail.js
const { host } = getApp().globalData

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  handleAdd(e) {
    let { detail } = this.data
    let { item } = e.mark
    item.count = 1
    item.checked = true
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `${host}/api/add`,
      data: {
        book: item
      },
      method: 'post',
      success: (res) => {
        if (res.data.code === 200) {
          this.triggerEvent('onUpdate')
          detail.is_in_my_book = true
          this.setData({
            detail
          })
          wx.hideLoading()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id } = options
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `${host}/api/detail?id=${id}`,
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({
            detail: res.data.data
          })
          wx.hideLoading()
        }
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