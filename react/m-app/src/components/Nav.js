import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'

class Nav extends Component {
  handleNav(id) {
    this.props.setState(['currentId'], id)
    this.props.onDispatch(actionCreator.getList(id))
  }
  componentDidMount() {
    let { currentId } = this.props
    this.props.onDispatch(actionCreator.getNav())
    this.props.onDispatch(actionCreator.getList(currentId))
  }
  render() {
    let { navList, currentId } = this.props
    let navListDom = navList.map(item => (
      <span 
        key={item.id} 
        className={'m-nav-item ' + (currentId === item.id ? 'active' : '')} 
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
  state = state.toJS()
  return {
    navList: state.navList,
    currentId: state.currentId
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

