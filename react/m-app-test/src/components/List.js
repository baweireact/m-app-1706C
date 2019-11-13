import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Api from '../api'
import actionCreator from '../store/actionCreator'

class List extends Component {
  handleDetail(id) {
    this.props.history.push(`/index/detail/${id}`)
  }
  handleAdd(item) {
    let { myBook, currentId } = this.props
    myBook.push(item)
    this.props.setState('myBook', myBook)
    Api.add({ book: item }).then(res => {
      if (res.code === 200) {
        this.props.onDispacth(actionCreator.getList(currentId))
      }
    })
  }
  render() {
    let { currentList } = this.props
    let currentListDom = currentList.map(item => (
      <div key={item.id}>
        {item.title}
        <button onClick={this.handleDetail.bind(this, item.id)}>详情</button>
        {
          item.is_in_my_book ?
          <button>已收藏</button>
          :
          <button onClick={this.handleAdd.bind(this, item)}>收藏</button>
        }
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
