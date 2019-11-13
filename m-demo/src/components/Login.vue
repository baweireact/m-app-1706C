<template>
  <div>
    <input v-model="username" placeholder="请输入用户名" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  mounted() {
    console.log("挂载登录组件");
  },
  beforeDestroy() {
    console.log("销毁登录组件");
  }
};
</script>

<style>
</style>