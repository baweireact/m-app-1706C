import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-nav-item">首页</NavLink>
        <NavLink to="/index/me" className="m-nav-item">我的</NavLink>
      </div>
    )
  }
}
