import React, { Component } from 'react'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Me from './Me'

export default class Index extends Component {
  render() {
    return (
      <div className="m-index">
        <Switch>
          <Route path="/index/home" component={Home}></Route>
          <Route path="/index/me" component={Me}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}
