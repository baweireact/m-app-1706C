<template>
  <div class="m-home">
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
  mounted() {
    this.$store.dispatch({ type: 'getNav' })
    this.$store.dispatch({ type: 'getList' })
    this.$store.dispatch({ type: 'getListAll' })
  }
}
</script>

<style>

</style>