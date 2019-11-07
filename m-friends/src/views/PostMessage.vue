<template>
  <div>
    <textarea v-model="message" name="" id="" cols="30" rows="10" placeholder="请输入要发布的内容"></textarea>
    <div>
      <button @click="handlePostMessage">发布</button>
    </div>
    
  </div>
</template>

<script>
import Api from '../api'

export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handlePostMessage() {
      if (this.message.trim() === "") {
        alert('消息不能为空')
        return
      }
      Api.addMessage({ message: this.message }).then(res => {
        if (res.code === 200) {
          this.$router.push('/index/home')
        }
      })
    }
  }
}
</script>

<style>

</style>