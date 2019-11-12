import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    let { currentList } = this.props
    let currentListDom = currentList.map(item => (
      <div key={item.id}>
        {item.title}
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
    currentList: state.currentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(List)