<template>
  <div>
    <img :src="detail.avatar" />
    <div>
      <button v-if="detail.is_in_my_book">已收藏</button>
      <button v-else @click="handleAdd()">收藏</button>
    </div>
    <div>{{detail.summary}}</div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    handleAdd() {
      //向后端存
      let book = this.detail
      book.checked = true   //复选框
      book.count = 1
      //把数据保存到后端
      Api.add({ book }).then(res => {
        if (res.code === 200) {
          //更新列表
          this.detail.is_in_my_book = true
        }
      });
    },
    //点赞
    handleLike(item) {
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
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    let id = this.$route.params.id;
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        this.detail = res.data;
      }
    });
  }
};
</script>

<style>
</style>