import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../views/Index'
import More from '../views/More'
import Add from '../views/Add'

export default class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/" to="/index/home" exact></Redirect>
          <Route path="/index" component={Index}></Route>
          <Route path="/more" component={More}></Route>
          <Route path="/add" component={Add}></Route>
        </Switch>
      </div>
    )
  }
}
