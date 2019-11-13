import React, { Component } from 'react'
import Nav from '../components/Nav'
import List from '../components/List'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <List></List>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
