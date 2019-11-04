<template>
  <div>
    <Nav></Nav>
    <List></List>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import List from '../components/List'

export default {
  components: {
    Nav,
    List
  },
  //挂载完，刷新时
  mounted() {
    //触发导航接口
    this.$store.dispatch({ type: 'getNav' })
    //触发列表接口
    this.$store.dispatch({ type: 'getList' })
  }
}
</script>

<style>

</style>