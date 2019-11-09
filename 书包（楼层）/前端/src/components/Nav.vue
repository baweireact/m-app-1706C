<template>
  <div class="m-nav">
    <div
      v-for="item in list"
      :key="item.id"
      class="m-sidebar-item"
      :class="{ active: currentId === item.id }"
      @click="handleNav(item.id)"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    },
    currentId() {
      return this.$store.state.currentId
    }
  },
  methods: {
    handleNav(id) {
      this.$store.commit({ type: 'setState', key: 'currentId', value: id })
      //https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
      document.getElementById(id).scrollIntoView(true)
    }
  }
};
</script>

<style>
</style>