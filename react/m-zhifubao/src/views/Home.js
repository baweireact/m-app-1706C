import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Home extends Component {

  handleMore() {
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
    let listDom = list.filter(item => item.selected).slice(0, 11).map(item => (
      <div className="m-list-item">
        <div className={"icon iconfont icon-" + item.icon}></div>
        <div>{item.name}</div>
      </div>
    ))
    return (
      <div className="m-main">
        {listDom}
        <div className="m-list-item" onClick={this.handleMore.bind(this)}>
          <div className="icon iconfont icon-gengduo"></div>
          <div>更多</div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)