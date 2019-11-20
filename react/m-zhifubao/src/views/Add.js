import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Add extends Component {
  handleDelete(id) {
    let {list} = this.props
    list.find(item => item.id === id).selected = false
    this.props.setState('list', list)
  }
  handleAdd(id) {
    let {list} = this.props
    list.find(item => item.id === id).selected = true
    this.props.setState('list', list)
  }
  handleSave() {
    let {list} = this.props
    axios({
      url: '/api/update',
      data: {
        listNew: list
      },
      method: 'post'
    }).then(res => {
      if (res.data.code === 200) {
        this.props.history.push('/more')
      }
    })
  }
  handleCancel() {
    this.props.history.push('/more')
  }
  componentDidMount() {
    axios({
      url: '/api/list'
    }).then(res => {
      if (res.data.code === 200) {
        this.props.setState('list', res.data.data)
      }
    })
  }
  render() {
    let { list } = this.props
    let selectedDom = list.filter(item => item.selected).map(item => (
      <div className="m-list-item">
        <div className={"icon iconfont icon-" + item.icon}></div>
        <div>{item.name}<button onClick={this.handleDelete.bind(this, item.id)}>-</button></div>
      </div>
    ))
    let unselectedDom = list.filter(item => !item.selected).map(item => (
      <div className="m-list-item">
        <div className={"icon iconfont icon-" + item.icon}></div>
        <div>{item.name}<button onClick={this.handleAdd.bind(this, item.id)}>+</button></div>
      </div>
    ))
    return (
      <div className="m-main">
        <div>
          <button onClick={this.handleCancel.bind(this)}>取消</button>
          <button onClick={this.handleSave.bind(this)}>完成</button>
        </div>
        <div className="m-selected-wrap">
          {selectedDom}
        </div>
        <div>
          {unselectedDom}
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    a: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)