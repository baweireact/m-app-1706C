import React, { Component } from 'react'
import axios from 'axios'
import { BackTop } from 'antd'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:83/'
}

let requestFlag = true
export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsList: [],
      page: 1,
      end: ''
    }

    this.newsRef = React.createRef()
  }

  handleScroll(e) {
    let { page, newsList, end } = this.state
    //console.log(e.target.clientHeight, e.target.scrollTop, e.target.scrollHeight)
    if (e.target.clientHeight + e.target.scrollTop + 100 > e.target.scrollHeight && requestFlag && end === '') {
      console.log('快到底啦')
      requestFlag = false
      page = page + 1
      this.setState({
        page
      })
      axios({
        url: `/api/news?page=${page}&size=10`
      }).then(res => {
        if (res.data.code === 200) {
          this.setState({
            newsList: [...newsList, ...res.data.data]
          })
          requestFlag = true
          if (res.data.data.length < 10) {
            this.setState({
              end: '我是有底线的~'
            })
          }
        }
      })
    }
  }

  handleToTop() {
    //this.newsRef.current.scrollTop = 0
    document.getElementById('top').scrollIntoView(true)
  }

  componentDidMount() {
    axios({
      url: '/api/news?page=1&size=10'
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          newsList: res.data.data
        })
      }
    })
  }
  render() {
    let { newsList, end } = this.state

    let newsListDom = newsList.map(item => (
      <div key={item.id} className="m-news-item">
        <img src={item.image}></img>
        <div>{item.name}</div>
      </div>
    ))

    return (
      <div className="m-news-wrap" id="news" ref={this.newsRef} onScroll={this.handleScroll.bind(this)}>
        <div id="top"></div>
        {newsListDom}
        <div className="m-end">{end}</div>
        <button className="m-up-btn" onClick={this.handleToTop.bind(this)}>↑</button>
        <BackTop target={() => {
          return document.getElementById('news')
        }}>回到顶部</BackTop>
      </div>
    )
  }
}
