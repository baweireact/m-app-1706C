import React, { Component } from 'react'
import { connect } from 'react-redux'
import Api from '../api'

class Nav extends Component {
  handleNav(id) {
    this.props.setState('currentId', id)
    Api.getList(`?id=${id}`).then(res => {
      this.props.setState('currentList', res.data)
    })
  }
  componentDidMount() {
    let { currentId } = this.props
    Api.getNav().then(res => {
      this.props.setState('navList', res.data)
    })
    Api.getList(`?id=${currentId}`).then(res => {
      this.props.setState('currentList', res.data)
    })
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)