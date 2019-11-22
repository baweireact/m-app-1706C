// pages/news/news.js
const { host } = getApp().globalData
let isResponesDone = true
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
    newsList: [],
    page: 1,
    end: '',
    toTop: '',
    searchValue: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(e) {
      let { field } = e.target.dataset
      this.setData({
        [field]: e.detail.value
      })
    },
    handleSearch(e) {
      let { searchValue } = this.data
      wx.request({
        url: `${host}/api/news?page=1&size=5&searchValue=${searchValue}`,
        success: (res) => {
          if (res.data.code === 200) {
            this.setData({
              newsList: res.data.data,
              page: 1
            })
            if (res.data.data.length < 5) {
              this.setData({
                end: '我是有底线的~'
              })
            } else {
              this.setData({
                end: ''
              })
            }
          }
        }
      })
    },
    handleMore(e) {
      let { newsList, page, end, searchValue } = this.data
      
      if (isResponesDone && end === '') {
        page++
        isResponesDone = false
        wx.request({
          url: `${host}/api/news?page=${page}&size=5&searchValue=${searchValue}`,
          success: (res) => {
            if (res.data.code === 200) {
              let addNews = res.data.data
              newsList = [...newsList, ...addNews]
              if (addNews.length < 5) {
                this.setData({
                  end: '我是有底线的~'
                })
              }
              this.setData({
                page,
                newsList
              })
              isResponesDone = true
            }
          }
        })
      }
    },
    handleToTop() {
      this.setData({
        toTop: 'top'
      })
    },
    onShow() {
      let { searchValue } = this.data
      wx.request({
        url: `${host}/api/news?page=1&size=5&searchValue=${searchValue}`,
        success: (res) => {
          if (res.data.code === 200) {
            this.setData({
              newsList: res.data.data
            })
          }
        }
      })
    }
  }
})
