<template>
  <div>
    <div v-for="item in currentList" :key="item.id">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentList() {
      return this.$store.state.currentList
    }
  }
}
</script>

<style>

</style>