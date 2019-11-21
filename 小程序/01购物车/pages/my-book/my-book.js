// pages/my-book/my-book.js
const computedBehavior = require('miniprogram-computed')
const myBehavior = require('./my-behavior.js')
const { host, handleSetTabBarBadge } = getApp().globalData

Component({
  behaviors: [computedBehavior, myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    myBook: [],
    markers: [
      {
        id: 0,
        longitude: 116.30006790161133, //经度
        latitude: 40.04096650866428,   //维度
        callout: {
          content: '收货地址:北京八维',
          color: '#333333',
          fontSize: 20,
          padding: 10
        },
        label: {
          content: '北京八维',
          color: '#f66f0c',
          fontSize: 20
        }
      }, {
        id: 1,
        longitude: 116.56294584274292,
        latitude: 39.78669766693327,
        callout: {
          content: '发货地址：京东总部',
          fontSize: 20,
          padding: 10
        },
        label: {
          content: '京东总部',
          color: '#f66f0c',
          fontSize: 20
        }
      }
    ],
    polyline: [{
      points: [{
        longitude: 116.30006790161133,
        latitude: 40.04096650866428,
      }, {
        longitude: 116.56294584274292,
        latitude: 39.78669766693327
      }],
      width: 2,
      color: '#ff0000'
    }]
  },

  computed: {
    total(data) {
      let totalPrice = 0, totalCount = 0
      data.myBook.filter(item => item.checked).forEach(item => {
        totalCount += item.count
        totalPrice += item.count * item.price
      })
      return {
        totalCount,
        totalPrice,
        selectedAll: data.myBook.length === data.myBook.filter(item => item.checked).length && data.myBook.length > 0
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook[index].count++
      this.setData({
        myBook
      })
      this.fun()
      this.update(myBook)
    },
    handleSub(e) {
      let { myBook } = this.data
      let { index } = e.mark
      if (myBook[index].count > 1) {
        myBook[index].count--
        this.setData({
          myBook
        })
        this.update(myBook)
      }
    },
    handleDelete(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook.splice(index, 1)
      this.setData({
        myBook
      })
      this.update(myBook)
    },
    handleChange(e) {
      let { value } = e.detail
      let { myBook } = this.data
      myBook.forEach(item => {
        item.checked = value.findIndex(book => book == item.id) >= 0
      })
      this.setData({
        myBook
      })
      this.update(myBook)
    },
    handleSelectAll(e) {
      let { value } = e.detail
      let { myBook } = this.data
      myBook.forEach(item => {
        item.checked = value.length > 0
      })
      this.setData({
        myBook
      })
      this.update(myBook)
    },
    update(myBook) {
      wx.request({
        url: `${host}/api/update`,
        data: {
          myBookNew: myBook
        },
        method: 'post',
        success: (res) => {
          if (res.data.code === 200) {
            handleSetTabBarBadge(res.data.data.length + '')
          }
        }
      })
    },
    handleDeleteSelected() {
      let { myBook } = this.data
      if (myBook.filter(item => item.checked).length === 0) {
        wx.showToast({
          title: '请选择要删除的商品',
          icon: 'none',
          mark: true,
          duration: 2000
        })
        return
      }
      wx.showModal({
        title: '删除',
        content: '你确定要删除选中的商品吗？',
        success: (res) => {
          if (res.confirm) {
            myBook = myBook.filter(item => !item.checked)
            this.setData({
              myBook
            })
            this.update(myBook)
          }
        }
      })
    },
    handleMapTap(e) {
      let { longitude, latitude } = e.detail
      let { markers } = this.data
      markers.push({
        id: (new Date()).getTime(),
        longitude,
        latitude,
        label: {
          content: '我的位置',
          color:'#f66f0c',
          fontSize: 20
        }
      })
      this.setData({
        markers
      })
    }
  },

  pageLifetimes: {
    show() {
      wx.request({
        url: `${host}/api/my_book`,
        success: (res) => {
          if (res.data.code === 200) {
            this.setData({
              myBook: res.data.data
            })
            handleSetTabBarBadge(res.data.data.length + '')
          }
        }
      })
    }
  }
})
