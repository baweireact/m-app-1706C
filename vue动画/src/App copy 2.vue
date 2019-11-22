<template>
  <div>
    <div>
      <div>
        <button @click="handleShow('Login')">登录</button>
        <button @click="handleShow('Index')">首页</button>
      </div>
      <keep-alive>
        <component :is="name"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
import Index from "./components/Index";

export default {
  data() {
    return {
      name: "Login",
    };
  },
  components: {
    Login,
    Index
  },
  methods: {
    handleShow(name) {
      this.name = name;
    },
  },
  mounted() {
    console.log('挂载父组件')
  }
};
</script>

