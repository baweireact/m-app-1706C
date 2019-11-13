<template>
  <div>
    <div>
      <button @click="handleShow('Login')">登录</button>
      <button @click="handleShow('Index')">首页</button>
    </div>
    <keep-alive>
      <component :is="name"></component>
    </keep-alive>

    <div>
      <button @click="handleTransition">按钮</button>
      <transition name="my-fade">
        <div v-show="show" class="m-text">动画实例</div>
      </transition>
      <transition name="slide-fade">
        <div v-show="show">1</div>
      </transition>
      <transition name="bounce">
        <p v-if="show">菜鸟教程 -- 学的不仅是技术，更是梦想！！！</p>
      </transition>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <p v-if="show">菜鸟教程 -- 学的不仅是技术，更是梦想！！！</p>
      </transition>
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
      show: true
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
    handleTransition() {
      this.show = !this.show;
    }
  },
  mounted() {
    console.log("挂载父组件");
  }
};
</script>
