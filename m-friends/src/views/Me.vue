<template>
  <div>
    <div>
      用户名：{{userInfo.username}}
    </div>
    <div>
      <router-link to="/modify_password">修改密码</router-link>
    </div>
    <div>
      <button @click="handleQuit">退出</button>
    </div>
  </div>
</template>

<script>
import Api from '../api'

export default {
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    handleQuit() {
      Api.quit().then(res => {
        if (res.code === 200) {
          window.location.href = '/login'
        }
      })
    }
  },
  mounted() {
    Api.getUserInfo().then(res => {
      if (res.code === 200) {
        this.userInfo = res.data
      }
    })
  }
}
</script>

<style>

</style>