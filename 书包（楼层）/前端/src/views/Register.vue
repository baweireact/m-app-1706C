<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" ref="username" />
    </div>
    <div>
      <input v-model="password" placeholder="请输入密码" :type="show ? 'type' : 'password'" @keyup.enter="handleLogin()" />
      <span
        class="icon iconfont m-input-icon"
        :class="show ? 'icon-caozuo-xianshihaoma' : 'icon-guanbi' "
        @click="handleShow"
      ></span> 
    </div>
    <button @click="handleRegister">注册</button>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      username: "",
      password: "",
      show: false
    };
  },
  methods: {
    handleRegister() {
      if (this.username.trim() === "") {
        alert("用户名不能为空");
        return;
      }
      let checkResult = this.checkPassword(this.password.trim())
      if(checkResult !== '正确') {
        alert(checkResult)
        return
      }
      Api.register({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.code === 200) {
          this.$router.push("/index/home");
        }
      });
    },
    checkPassword(password) {
      if (password.length < 6 || password.length > 30) {
        return "密码长度应该在6-30位之间";
      }
      if (/^\d+$/.test(password)) {
        return "不能是全数字";
      }
      if (/^[a-z]+$/i.test(password)) {
        return "不能是全字母";
      }
      if (!/^[A-Za-z0-9]+$/.test(password)) {
        return "只能含有数字和字母，不能有其他字符";
      }
      return "正确";
    },
    handleShow() {
      this.show = !this.show;
    }
  },
  mounted() {
    this.$refs.username.focus();
  }
};
</script>

<style>
</style>