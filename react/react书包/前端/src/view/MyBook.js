import React, { Component } from 'react'
import { connect } from 'react-redux'
import Api from '../api'
import actionCreator from '../store/actionCreator'

class MyBook extends Component {
  handleAdd(index) {
    let { myBook } = this.props
    myBook[index].count++
    let myBookClone = JSON.parse(JSON.stringify(myBook))
    this.props.setState('myBook', myBookClone)
  }

  handleSub(index) {
    let { myBook } = this.props
    if (myBook[index].count > 1) {
      myBook[index].count--
      let myBookClone = JSON.parse(JSON.stringify(myBook))
      this.props.setState('myBook', myBookClone)
    }
  }

  handleDelete(index) {
    let { myBook } = this.props
    myBook.splice(index, 1)
    let myBookClone = JSON.parse(JSON.stringify(myBook))
    this.props.setState('myBook', myBookClone)
  }

  handleSelect(index, e) {
    let { myBook } = this.props
    myBook[index].checked = e.target.checked
    let myBookClone = JSON.parse(JSON.stringify(myBook))
    this.props.setState('myBook', myBookClone)
  }

  handleSelectAll(e) {
    let { myBook } = this.props
    myBook.forEach(item => {
      item.checked = e.target.checked
    })
    let myBookClone = JSON.parse(JSON.stringify(myBook))
    this.props.setState('myBook', myBookClone)
  }

  //每次更新都会走这个生命周期
  componentDidUpdate() {
    let { myBook } = this.props
    Api.update({ myBookNew: myBook}).then(res => {

    })
  }

  componentDidMount() {
    this.props.onDispacth(actionCreator.getMyBook())
  }

  render() {
    let { myBook } = this.props
    let myBookDom = myBook.map((item,index) => (
    <div key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={this.handleSelect.bind(this, index)} id={item.id}></input>
      <label htmlFor={item.id}>{item.title}</label>
      ￥{item.price}
      <button onClick={this.handleSub.bind(this, index)}>-</button>
        {item.count}
      <button onClick={this.handleAdd.bind(this, index)}>+</button>
      <button onClick={this.handleDelete.bind(this, index)}>删除</button>
    </div>
    ))
    let totalPrice = 0, totalCount = 0
    myBook.filter(item => item.checked).forEach(item => {
      totalCount += item.count
      totalPrice += item.count * item.price
    })
    let selectAll = myBook.filter(item => item.checked).length === myBook.length && myBook.length > 0
    return (
      <div>
        {myBookDom}
        <div>
          <input type="checkbox" checked={selectAll} id="m-select-all" onChange={this.handleSelectAll.bind(this)}></input>
          <label htmlFor="m-select-all">全选</label>
        </div>
        总价：￥{totalPrice}，总数：{totalCount}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myBook: state.myBook,
    a: []
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBook)
