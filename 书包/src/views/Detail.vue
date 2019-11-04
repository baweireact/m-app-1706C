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
import axios from "axios";

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
      book.count = 1
      axios({
        url: "/api/add",
        data: {
          book
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          //更新列表
          this.detail.is_in_my_book = true
        }
      });
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    let id = this.$route.params.id;
    axios({
      url: `/api/detail?id=${id}`
    }).then(res => {
      if (res.data.code === 200) {
        this.detail = res.data.data;
      }
    });
  }
};
</script>

<style>
</style>