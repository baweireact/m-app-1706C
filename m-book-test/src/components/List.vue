<template>
  <div>
    <div v-for="item in currentList" :key="item.id">
      {{item.title}},
      <button @click="handleDetail(item.id)">详情</button>
      <button v-if="item.is_in_my_book">已收藏</button>
      <button v-else @click="handleAdd(item)">收藏</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    currentList() {
      return this.$store.state.currentList;
    }
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    handleAdd(item) {
      let myBook = this.$store.state.myBook;
      let index = myBook.findIndex(book => book.id === item.id);
      if (index >= 0) {
        myBook[index].count++;
      } else {
        item.count = 1;
        myBook.push(item);
      }
      //向store里存
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      //向后端存
      axios({
        url: "/api/add",
        data: {
          book: item
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          //更新列表，收藏后不需要刷新，就变成已收藏
          this.$store.dispatch({ type: "getList" });
        }
      });
    }
  }
};
</script>

<style>
</style>