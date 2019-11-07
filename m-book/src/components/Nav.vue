<template>
  <div class="m-nav-warp">
    <div
      v-for="item in navList"
      :key="item.id"
      class="m-nav-item"
      :class="{active: currentId === item.id}"
      @click="handleNav(item.id)"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    navList() {
      return this.$store.state.navList;
    },
    currentId() {
      return this.$store.state.currentId;
    }
  },
  methods: {
    handleNav(id) {
      this.$store.commit({ type: 'setState', key: 'currentId', value: id })
      document.getElementById(id).scrollIntoView(true)
    }
  }
};
</script>

<style>
</style>