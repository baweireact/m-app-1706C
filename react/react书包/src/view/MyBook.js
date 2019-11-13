import React, { Component } from 'react'
import { connect } from 'react-redux'
import Api from '../api'
import actionCreator from '../store/actionCreator'

class MyBook extends Component {

  componentDidMount() {
    this.props.onDispacth(actionCreator.getMyBook())
  }

  render() {
    let { myBook } = this.props
    let myBookDom = myBook.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
    return (
      <div>
        {myBookDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myBook: state.myBook
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBook)
