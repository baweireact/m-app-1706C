<template>
  <div>
    <div v-for="(item, index) in myBook" :key="item.id">
      <input
        type="checkbox"
        :checked="item.checked"
        @click="handleCheck(index, $event)"
        :id="item.id"
      />
      <label :for="item.id">{{item.title}}</label>
      ￥{{item.price}},
      <button @click="handleSub(index)">-</button>
      {{item.count}}
      <button @click="handleAdd(index)">+</button>
      <button @click="handleDelete(index)">删除</button>
    </div>
    <div>
      <input type="checkbox" :checked="total.selectAll" id="m-select-all" @click="handleSelectAll" />
      <label for="m-select-all">全选</label>
      <button @click="handleDeleteAll">删除</button>
    </div>
    <div>总价: ￥{{total.totalPrice}},总数：{{total.totalCount}}</div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  computed: {
    myBook() {
      return this.$store.state.myBook;
    },
    //总价总数
    total() {
      let myBook = this.$store.state.myBook;
      let totalCount = 0,
        totalPrice = 0;
      //初始值都是0，遍历一遍整个数据，计算出总价和总数
      myBook
        .filter(item => item.checked)
        .forEach(item => {
          (totalCount += item.count), (totalPrice += item.count * item.price);
        });
      return {
        totalCount,
        totalPrice,
        selectAll: myBook.every(item => item.checked)
      };
    }
  },
  methods: {
    //减
    handleSub(index) {
      let myBook = this.myBook;
      if (myBook[index].count > 1) {
        myBook[index].count--;
        //向store里存
        this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      }
    },
    //加
    handleAdd(index) {
      let myBook = this.myBook;
      myBook[index].count++;
      //向store里存
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    //删除
    handleDelete(index) {
      let myBook = this.myBook;
      myBook.splice(index, 1); //删除
      //向store里存
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    handleDeleteAll() {
      let myBook = this.myBook;
      //向store里存
      this.$store.commit({
        type: "setState",
        key: "myBook",
        value: myBook.filter(item => !item.checked)
      });
    },
    //复选框更新
    handleCheck(index, e) {
      console.log(index, e);
      let myBook = this.myBook;
      myBook[index].checked = e.target.checked;
      //向store里存
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    //全选
    handleSelectAll(e) {
      let myBook = this.myBook;
      myBook.forEach(item => {
        item.checked = e.target.checked
      })
      //向store里存
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    }
  },
  //组件重新渲染完，更新完
  updated() {
    Api.update({ myBookNew: this.myBook }).then(res => {});
  },
  mounted() {
    //重新请求一下，再次拿一下数据，避免刷新后就没了
    this.$store.dispatch({ type: "getMyBook" });
  }
};
</script>

<style>
</style>