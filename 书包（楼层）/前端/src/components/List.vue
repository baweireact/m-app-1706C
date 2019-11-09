<template>
  <div class="m-list" @scroll="handleScroll">
    <div v-for="categary in list" :key="categary.id" :id="categary.id" class="js-list-item">
      <div class="m-list-title">{{categary.title}}</div>
      <div>
        <div v-for="item in categary.list" :key="item.id" class="m-list-content">
          <img :src="item.avatar" alt="" class="m-img">
          <div class="m-list-info">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTopArr: []
    }
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    handleScroll(e) {
      //滚动事件控制导航的高亮
      this.offsetTopArr.forEach((item,index) => {
        if (item <= e.target.scrollTop + 30) {
          this.$store.commit({ type: 'setState', key: 'currentId', value: index })
        }
      })
    }
  },
  updated() {
    //查找每个分类距离顶部的高度
    let listItem = document.getElementsByClassName('js-list-item')
    this.offsetTopArr = Array.from(listItem).map(item => item.offsetTop)
  }
}
</script>

<style>

</style>