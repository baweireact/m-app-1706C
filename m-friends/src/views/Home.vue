<template>
  <div>
    <div class="m-post-btn-wrap">
      <router-link to="/post_message" class="m-post-btn">发布消息</router-link>
    </div>
    <div>
      <div v-for="(item, index) in messageList" :key="item.id" class="m-message-list-item">
        <div>{{item.username}} : {{item.message}}</div>
        <div>发布时间：{{item.createTime}}</div>
        <div>
          <button
            v-if="item.like.find(like => like === username)"
            @click="handleCancelLike(index)"
          >取消点赞</button>
          <button v-else @click="handleLike(index)">点赞</button>
          <button @click="handleShow(index)">评论</button>
          <button v-if="item.username === username" @click="handleDelete(index)">删除</button>
        </div>
        <div>
          点赞:
          <span>{{item.like.join(',')}}</span>
        </div>
        <div>
          评论:
          <div
            v-for="(comment,index) in item.comment"
            :key="index"
          >{{comment.username}}:{{comment.content}}</div>
        </div>
      </div>
    </div>
    <el-dialog :visible="visible" @close="handleClose">
      <el-input type="text" v-model="comment" placeholder="请输入评论内容"></el-input>
      <div slot="footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button @click="handleConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Api from "../api";
import moment from "moment";
moment.locale("zh-cn");

export default {
  data() {
    return {
      visible: false,
      comment: "",
      currentIndex: 0,
      username: localStorage.getItem("username")
    };
  },
  computed: {
    messageList() {
      let messageList = JSON.parse(JSON.stringify(this.$store.state.messageList))
      // console.log(moment(1573042782076).format('YYYY年MM月DD日 hh:mm:ss'))
      // console.log(moment(1573042782076).fromNow())

      messageList = messageList.map(item => {
        item.createTime = moment(item.createTime).fromNow();
        return item;
      });
      return messageList;
    }
  },
  methods: {
    handleShow(index) {
      this.comment = "";
      this.currentIndex = index;
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    handleLike(index) {
      let messageList = this.$store.state.messageList;
      messageList[index].like.push(this.username);
      this.$store.commit({
        type: "setState",
        key: "messageList",
        value: messageList
      });
      this.updateMessageList()
    },
    handleCancelLike(index) {
      let messageList = this.$store.state.messageList;
      let likeIndex = messageList[index].like.findIndex(
        item => item === this.username
      );
      messageList[index].like.splice(likeIndex, 1);
      this.$store.commit({
        type: "setState",
        key: "messageList",
        value: messageList
      });
      this.updateMessageList()
    },
    handleConfirm() {
      let messageList = this.$store.state.messageList;
      messageList[this.currentIndex].comment.push({
        username: this.username,
        content: this.comment
      });
      this.$store.commit({
        type: "setState",
        key: "messageList",
        value: messageList
      });
      this.visible = false;
      this.updateMessageList()
    },
    handleDelete(index) {
      let messageList = this.$store.state.messageList;
      messageList.splice(index, 1)
      this.$store.commit({
        type: "setState",
        key: "messageList",
        value: messageList
      });
      this.updateMessageList()
    },
    updateMessageList() {
      let messageList = this.$store.state.messageList;
      Api.updateMessage({ newMessageList: messageList }).then(res => {});
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getMessageList" });
  }
};
</script>

<style>
</style>