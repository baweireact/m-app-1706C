<template>
  <div>
    <div v-for="item in myBook" :key="item.id">
      {{item.title}},￥{{item.price}},数量:{{item.count}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    myBook() {
      return this.$store.state.myBook
    }
  },
  mounted() {
    //重新请求一下，再次拿一下数据，避免刷新后就没了
    this.$store.dispatch({ type: 'getMyBook' })
  }
}
</script>

<style>

</style>