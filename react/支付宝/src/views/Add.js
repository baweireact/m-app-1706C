import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Item from '../components/Item'

class Add extends Component {
  handleDelete(id) {
    let { list } = this.props
    list.find(item => item.id === id).selected = false
    this.props.setState('list', list)
  }
  handleAdd(id) {
    let { list } = this.props
    list.find(item => item.id === id).selected = true
    this.props.setState('list', list)
  }
  handleSave() {
    let { list } = this.props
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
      <Item type="delete" item={item} onDelete={this.handleDelete.bind(this)}></Item>
    ))
    let unselectedDom = list.filter(item => !item.selected).map(item => (
      <Item type="add" item={item} onAdd={this.handleAdd.bind(this)}></Item>
    ))
    return (
      <div className="m-wrap">
        <div className="m-save-wrap">
          <button onClick={this.handleCancel.bind(this)}>取消</button>
          <button className="m-save-btn" onClick={this.handleSave.bind(this)}>完成</button>
        </div>
        {selectedDom}
        <div className="m-more-text">更多应用</div>
        {unselectedDom}
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