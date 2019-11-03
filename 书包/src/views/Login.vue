<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" ref="username">
    </div>
    <div>
      <input v-model="password" placeholder="请输入密码" type="password" @keyup.enter="handleLogin()">
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if ( this.username.trim() === '') {
        alert('用户名不能为空')
        return
      }
      if ( this.password.trim() === '') {
        alert('密码不能为空')
        return
      }
      axios({
        url: '/api/login',
        data: {
          username: this.username,
          password: this.password
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          this.$router.push('/index/home')
        } else {
          alert(res.data.message)
        }
      })
    }
  },
  mounted() {
    this.$refs.username.focus()
  }
}
</script>

<style>

</style>