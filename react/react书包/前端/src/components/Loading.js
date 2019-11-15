import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loading extends Component {
  render() {
    let { loading, lazyLoading } = this.props
    return (
      <div className={"m-loading-wrap " + (loading ? 'active ' : '') + (lazyLoading ? 'active' : '')}>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loading)