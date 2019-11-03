<template>
  <div>
    <div>
      <input v-model="oldPassword" type="password" placeholder="请输入原密码" ref="autoFocus" />
    </div>
    <div>
      <input
        v-model="newPassword"
        placeholder="请输入新密码"
        type="password"
        @keyup.enter="handleModifyPassword()"
      />
    </div>
    <button @click="handleModifyPassword()">确认提交</button>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: ""
    };
  },
  methods: {
    handleModifyPassword() {
      let checkResult = this.checkPassword(this.newPassword.trim());
      if (checkResult !== "正确") {
        alert(checkResult);
        return;
      }
      Api.modifyPassword({ oldPassword: this.oldPassword, newPassword: this.newPassword }).then(
        res => {
          if (res.code === 200) {
            alert(res.message)
            this.$router.push("/login");
          }
        }
      );
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
    }
  },
  mounted() {
    this.$refs.autoFocus.focus();
  }
};
</script>

<style>
</style>