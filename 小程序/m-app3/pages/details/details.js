// pages/details/details.js
const { host } = getApp().globalData

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    detail: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})
