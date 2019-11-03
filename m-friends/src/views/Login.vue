<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" ref="username" />
    </div>
    <div>
      <input
        v-model="password"
        placeholder="请输入密码"
        :type="isShow ? 'text' : 'password'"
        @keyup.enter="handleLogin()"
      />
      <span
        :class="'icon iconfont m-input-icon ' + (isShow ? 'icon-caozuo-xianshihaoma' : 'icon-buxianshimima')"
        @click="handlePassword()"
      ></span>
    </div>

    <button @click="handleLogin()">登录</button>
    <router-link to="/register">注册</router-link>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      isShow: false
    };
  },
  methods: {
    handleLogin() {
      if (this.username.trim() === "") {
        alert("用户名不能为空");
        return;
      }
      if (this.password.trim() === "") {
        alert("密码不能为空");
        return;
      }
      Api.login({ username: this.username, password: this.password }).then(
        res => {
          if (res.code === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/index/home");
          }
        }
      );
    },
    handlePassword() {
      this.isShow = !this.isShow;
    }
  },
  mounted() {
    this.$refs.username.focus();
  }
};
</script>

<style>
</style>