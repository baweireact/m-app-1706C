import React, { Component, Suspense, lazy } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Home from './Home'
//import MyBook from './MyBook'
import Loading from '../components/Loading'
const MyBook = lazy(async () => { 
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./MyBook'))
    }, 2000)
  })
})

export default class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/index/home" className="m-nav-item">首页</NavLink>
          <NavLink to="/index/my_book" className="m-nav-item">书包</NavLink>
        </div>
        <Suspense fallback={<Loading lazyLoading={true}></Loading>}>
          <Switch>
            <Route path="/index/home" component={Home}></Route>
            <Route path="/index/my_book" component={MyBook}></Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
