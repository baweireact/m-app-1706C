import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      <div className="m-list-item">
        <div className={"icon iconfont icon-" + item.icon}></div>
        <div>{item.name}</div>
      </div>
    ))
    return (
      <div className="m-main">
        <div>
          <Link to="/index/home">首页</Link>
          <button onClick={this.handleAdd.bind(this)}>+</button>
        </div>
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