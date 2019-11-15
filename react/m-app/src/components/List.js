import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load'

class List extends Component {
  render() {
    let { currentList } = this.props
    let currentListDom = currentList.map(item => (
      <div key={item.id} className="m-list-item">
        <LazyLoad className="m-list-item-img-wrap">
          <img src={item.avatar} className="m-list-item-img"></img>
        </LazyLoad>
        <div className="m-list-item-info">
          {item.title}
        </div>
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
  state = state.toJS()
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