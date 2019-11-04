<template>
  <div>
    <span
      v-for="item in navList"
      :key="item.id"
      class="m-nav-item"
      :class="{active: currentId === item.id}"
      @click="handleNav(item.id)"
    >{{item.title}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    navList() {
      //从仓库里取数据
      return this.$store.state.navList;
    },
    currentId() {
      //从仓库里取数据
      return this.$store.state.currentId
    }
  },
  methods: {
    handleNav(currentId) {
      //高亮
      this.$store.commit({ type: 'setState', key: 'currentId', value: currentId })
      //更新列表
      this.$store.dispatch({ type: 'getList' })
    }
  }
};
</script>

<style>
</style>