<template>
  <div class="m-index">
    <input v-model="search" placeholder="请输入搜索词" />
    <div v-for="(item, index) in 100" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    console.log('挂载首页组件')
  },
  beforeDestroy() {
    console.log('销毁首页组件')
  }
}
</script>

<style>
.m-index{height: 200px;overflow-y: auto}
</style>