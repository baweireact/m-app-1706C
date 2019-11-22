// components/book-list/book-list.js
const { host, handleSetTabBarBadge } = getApp().globalData

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDetail(e) {
      let { id } = e.mark
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`,
      })
    },
    handleAdd(e) {
      let { item } = e.mark
      wx.showLoading({
        title: '加载中',
      })
      item.count = 1
      item.checked = true
      wx.request({
        url: `${host}/api/add`,
        data: {
          book: item
        },
        method: 'post',
        success: (res) => {
          if (res.data.code === 200) {
            this.triggerEvent('onUpdate')
            handleSetTabBarBadge(res.data.data.length + '')
          }
        }
      })

      wx.setStorage({
        key: "book",
        data: item
      })
    }
  }
})
