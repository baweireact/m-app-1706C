<template>
  <div class="m-wrap">
    <div class="m-header">
      <div>
        <router-link to="/index/home" class="m-nav-item">首页</router-link>
        <router-link to="/index/my_book" class="m-nav-item">书包</router-link>
      </div>
      <div class="m-user" v-if="username">用户名:{{username}} <button @click="handleQuit()">退出</button></div>
      <div class="m-user" v-else><button @click="handleLogin()">登录</button></div>
    </div>
    <div class="m-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleQuit() {
      localStorage.removeItem('username')
      this.username = ''
    },
    handleLogin() {
      this.$router.push('/login')
    }
  },
  mounted() {
    this.username = localStorage.getItem('username')
  }
}
</script>

<style>

</style>