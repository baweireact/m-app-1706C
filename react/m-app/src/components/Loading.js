import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loading extends Component {
  render() {
    let { loading, lazyLoading } = this.props
    return (
      <div className={"m-loading-wrap " + (loading ? 'active ' : '') + (lazyLoading ? 'active' : '')}>
        <span className="m-loading-img"></span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  state = state.toJS()
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
