import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Item from '../components/Item'

class More extends Component {
  handleAdd() {
    this.props.history.push('/add')
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
    let listDom = list.map(item => (
      <Item item={item}></Item>
    ))
    return (
      <div className="m-wrap">
        <div><Link to="/index/home">{'< 首页'}</Link></div>
        <div className="m-more-box" onClick={this.handleAdd.bind(this)}>+</div>
        {listDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(More)