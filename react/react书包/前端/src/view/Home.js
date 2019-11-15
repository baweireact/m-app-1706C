import React, { Component } from 'react'
import Nav from '../components/Nav'
import List from '../components/List'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <List></List>
      </div>
    )
  }
}
