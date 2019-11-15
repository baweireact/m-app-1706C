import React, { Component } from 'react'
import { connect } from 'react-redux'
import Api from '../api'
import actionCreator from '../store/actionCreator'

class Nav extends Component {
  handleNav(id) {
    //点击导航时更新高亮
    this.props.setState('currentId', id)
    //点击导航时更新列表
    this.props.onDispacth(actionCreator.getList(id))
  }
  componentDidMount() {
    let { currentId } = this.props
    //挂载时获取导航数据
    this.props.onDispacth(actionCreator.getNav())
    //挂载时获取列表数据
    this.props.onDispacth(actionCreator.getList(currentId))
  }
  render() {
    let { navList, currentId } = this.props
    let navListDom = navList.map(item => (
      <span 
        key={item.id} 
        className={"m-nav-item " + (currentId === item.id ? 'active' : '')}
        onClick={this.handleNav.bind(this, item.id)}>{item.title}</span>
    ))
    return (
      <div>
        {navListDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navList: state.navList,
    currentId: state.currentId
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)