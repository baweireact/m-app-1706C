<template>
  <div class="m-right" @scroll="handleScroll">
    <div v-for="categroyItem in listAll" :key="categroyItem.id" :id="categroyItem.id" class="js-category-item">
      <div class="m-category-title">{{categroyItem.title}}</div>
      <div v-for="item in categroyItem.list" :key="item.id" class="m-list-item">
        <div class="m-list-item-img-wrap">
          <img v-lazy="item.avatar" alt="" class="m-list-item-img">
        </div>
        <div class="m-list-item-info">
          <div>{{item.title}}</div>
          <div>
            <button @click="handleDetail(item.id)">详情</button>
            <button v-if="item.is_in_my_book">已收藏</button>
            <button v-else @click="handleAdd(item)">收藏</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api'

export default {
  data() {
    return {
      offetTopArr: []
    }
  },
  computed: {
    listAll() {
      return this.$store.state.listAll
    }
  },
  methods: {
    handleAdd(book) {
      if (!localStorage.getItem('username')) {
        this.$router.push('/login')
      }
      book.count = 1
      book.checked = true
      Api.add({book}).then(res => {
        if (res.code === 200) {
          //this.$store.dispatch({ type: 'getList' })
          this.$store.dispatch({ type: 'getListAll' })
        }
      })
    },
    handleDetail(id) {
      //this.$router.push(`/detail/${id}`)
      this.$router.push({ path: '/detail', query: { id }})
    },
    handleScroll(e) {
      let offetTopArr = this.offetTopArr
      let scrollTop =  e.target.scrollTop + 30
      console.log(scrollTop)

      offetTopArr.forEach((item, index) => {
        if (item <= scrollTop) {
          this.$store.commit({ type: 'setState', key: 'currentId', value: index })
        }
      })
    }
  },
  updated() {
    let categroyItem = document.getElementsByClassName('js-category-item')
    console.log(categroyItem)
    this.offetTopArr = Array.from(categroyItem).map(item => item.offsetTop )
    console.log(this.offetTopArr)
  }
}
</script>

<style>

</style>