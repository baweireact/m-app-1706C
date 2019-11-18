import React, { Component } from 'react'
import axios from 'axios'

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
        url: `http://localhost:83/api/news?page=${page}&size=10`
      }).then(res => {
        if (res.data.code === 200) {
          this.setState({
            newsList: [...newsList, ...res.data.data]
          })
          requestFlag = true
          if (res.data.data.length < 10) {
            console.log('我是有底线的~')
            this.setState({
              end: '我是有底线的~'
            })
          }
        }
      })
    }
  }

  handleUp() {
    console.log(this.newsRef.current)
    //this.newsRef.current.scrollTop = 0
    //this.topAnchorRef.scorllIntoView(true)
    document.getElementById('top').scrollIntoView(true)
  }

  waterFall() {
    // 1- 确定列数  = 页面的宽度 / 图片的宽度
    let items = document.getElementsByClassName('js-news-list-item')
    items = Array.from(items)
    var itemWidth = items[0].offsetWidth;
    var columns = 2;
    var arr = [];
    for (var i = 0; i < items.length; i++) {
      if (i < columns) {
        // 2- 确定第一行
        items[i].style.top = 0;

        items[i].style.left = i === 0 ? 0 : '50%';
        arr.push(items[i].offsetHeight);

      } else {
        // 其他行
        // 3- 找到数组中最小高度  和 它的索引
        var minHeight = arr[0];
        var index = 0;
        for (var j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        }
        // 4- 设置下一行的第一个盒子位置
        // top值就是最小列的高度 + gap
        items[i].style.top = arr[index] + 'px';
        // left值就是最小列距离左边的距离
        items[i].style.left = items[index].offsetLeft + 'px';

        // 5- 修改最小列的高度 
        // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
        arr[index] = arr[index] + items[i].offsetHeight;
      }
    }
  }


  componentDidUpdate() {
    this.waterFall()
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:83/api/news?page=1&size=10'
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          newsList: res.data.data
        })
        // setTimeout(() => {
        //   this.waterFall()
        // }, 500)
        
      }
    })
  }
  render() {
    let { newsList, end } = this.state

    let newsListDom = newsList.map(item => {
      let index = item.image.lastIndexOf('/')
      console.log(item.image.slice(index + 1))
      let imageSize = item.image.slice(index + 1).split('x')
      return (<div key={item.id} className="m-news-list-item js-news-list-item">
        <div className="m-news-inner">
          <img src={item.image} className="m-news-img" width={imageSize[0]} height={imageSize[1]}></img>
          <div className="m-news-title">No.{item.id}:{item.name}</div>
        </div>
      </div>)
    })

    return (
      <div className="m-news-wrap" onScroll={this.handleScroll.bind(this)} ref={this.newsRef}>
        <div id="top"></div>
        {newsListDom}
        <div className="m-end">{end}</div>
        <button className="m-up-btn" onClick={this.handleUp.bind(this)}>↑</button>
      </div>
    )
  }
}
