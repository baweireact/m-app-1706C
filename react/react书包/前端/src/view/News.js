import React, { Component } from 'react'
import axios from 'axios'

let requestFlag = true
export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsList: [],
      page: 1
    }
  }

  handleScroll(e) {
    let { page, newsList } = this.state
    //console.log(e.target.clientHeight, e.target.scrollTop, e.target.scrollHeight)
    if (e.target.clientHeight + e.target.scrollTop + 100 > e.target.scrollHeight && requestFlag) {
      console.log('快到底啦')
      requestFlag = false
      page = page + 1
      this.setState({
        page
      })
      axios({
        url: `http://localhost:83/api/news?page=${page}&size=10`
      }).then(res => {
        if (res.data.code === 200) {
          this.setState({
            newsList: [...newsList, ...res.data.data]
          })
          requestFlag = true
        }
      })
    }
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:83/api/news?page=1&size=10'
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          newsList: res.data.data
        })
      }
    })
  }
  render() {
    let { newsList } = this.state

    let newsListDom = newsList.map(item => (
      <div key={item.id}>
        <img src={item.image}></img>
        {item.name}
      </div>
    ))

    return (
      <div className="m-news-wrap" onScroll={this.handleScroll.bind(this)}>
        {newsListDom}
      </div>
    )
  }
}
