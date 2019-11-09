<template>
  <div class="m-main">
    <div class="m-home">
      <Nav></Nav>
      <List></List>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import List from "../components/List";

export default {
  components: {
    Nav,
    List
  },
  //挂载完，刷新时
  mounted() {
    this.$store.dispatch({ type: "getList" });
  }
};
</script>

<style>
</style>