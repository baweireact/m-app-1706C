import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Api from '../api'
import actionCreator from '../store/actionCreator'
import LazyLoad from 'react-lazy-load'

class List extends Component {
  //详情
  handleDetail(id) {
    this.props.history.push(`/index/detail/${id}`)
  }
  //收藏
  handleAdd(item) {
    let { myBook, currentId } = this.props
    item.count = 1
    item.checked = true
    myBook.push(item)
    this.props.setState('myBook', myBook)
    this.props.setState('loading', true)
    Api.add({ book: item }).then(res => {
      if (res.code === 200) {
        //收藏成功后再获取一遍列表数据，把收藏变成已收藏
        this.props.onDispacth(actionCreator.getList(currentId))
      }
    })
  }
  render() {
    let { currentList } = this.props
    //is_in_my_book标识收藏和已收藏，true为已收藏，false为收藏
    let currentListDom = currentList.map(item => (
      <div key={item.id} className="m-list-item">
        <LazyLoad className="m-list-item-img-wrap">
          <img src={item.avatar} className="m-list-item-img"></img>
        </LazyLoad>
        <div className="m-list-item-info">
          {item.title}
          <button onClick={this.handleDetail.bind(this, item.id)}>详情</button>
          {
            item.is_in_my_book ?
              <button>已收藏</button>
              :
              <button onClick={this.handleAdd.bind(this, item)}>收藏</button>
          }
        </div>
      </div>
    ))
    return (
      <div>
        {currentListDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navList: state.navList,
    currentId: state.currentId,
    currentList: state.currentList,
    myBook: state.myBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispacth(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))
