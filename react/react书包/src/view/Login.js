import React, { Component } from 'react'
import Api from '../api'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleLogin() {
    let { username, password } = this.state
    if (username.trim() === '') {
      alert('用户名不能为空')
      return
    }
    if (password.trim() === '') {
      alert('密码不能为空')
      return
    }
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        this.props.history.push('/index/home')
      }
    })
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }

  render() {
    let { username, password } = this.state
    return (
      <div>
        <div>
          <input value={username} onChange={this.handleInput.bind(this, 'username')} autoFocus placeholder="请输入用户名"></input>
        </div>
        <div>
          <input value={password} onChange={(e) => this.handleInput('password', e)} onKeyUp={this.handleEnter.bind(this)} placeholder="请输入密码" type="password"></input>
        </div>
        <button onClick={this.handleLogin.bind(this)}>登录</button>
      </div>
    )
  }
}
export default Login
