import React, { Component } from 'react'
import Nav from '../components/Nav'
import List from '../components/List'
import { BackTop, Button } from 'antd'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <List></List>
        <BackTop>回到顶部</BackTop>
      </div>
    )
  }
}
