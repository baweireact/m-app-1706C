// pages/my-book/my-book.js
const { host, handleSetTabBarBadge } = getApp().globalData
const myBehavior = require('../../utils/my-behavior.js')
const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [myBehavior, computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    myBook: []
  },

  computed: {
    total(data) {
      let totalPrice = 0, totalCount = 0
      data.myBook.forEach(item => {
        totalCount += item.count
        totalPrice += item.price * item.count
      })
      return {
        totalPrice,
        totalCount
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDelete(e) {
      let { index } = e.mark
      let { myBook } = this.data
      myBook.splice(index, 1)
      this.setData({
        myBook
      })
      handleSetTabBarBadge(myBook.length + '')
      wx.request({
        url: `${host}/api/update`,
        data: {
          myBookNew: myBook
        },
        method: 'post',
        success: () => {

        }
      })
      this.fun()
    }
  },

  pageLifetimes: {
    show: function () {
      wx.request({
        url: `${host}/api/my_book`,
        success: (res) => {
          if (res.data.code === 200) {
            handleSetTabBarBadge(res.data.data.length + '')
            this.setData({
              myBook: res.data.data
            })
          }
        }
      })
    }
  }
})
