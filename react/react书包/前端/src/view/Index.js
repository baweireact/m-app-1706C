import React, { Component, Suspense, lazy } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
// import MyBook from './MyBook'
import Detail from './Detail'
import News from './News'
import Loading from '../components/Loading'

//模拟路由懒加载延时
const MyBook = lazy( async () => {
  return await new Promise(resolve => {
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
          <NavLink to="/index/news" className="m-nav-item">新闻</NavLink>
        </div>
        <Suspense fallback={<Loading lazyLoading={true}></Loading>}>
          <Switch>
            <Route path="/index/home" component={Home}></Route>
            <Route path="/index/my_book" render={() => {
              if (localStorage.getItem('username')) {
                return <MyBook></MyBook>
              } else {
                return <Redirect to="/login"></Redirect>
              }
            }}></Route>
            <Route path="/index/detail/:id" component={Detail}></Route>
            <Route path="/index/news" component={News}></Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
