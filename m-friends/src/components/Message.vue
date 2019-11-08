<template>
  <div>
    <div>
      <div v-for="item in messageList" :key="item.id" class="m-message-list-item">
        <div class="m-message-username">{{item.username}}</div>
        <div>{{item.message}}</div>
        <div class="m-message-time">{{item.createTime}}</div>
        <div>
          <button
            v-if="item.like.find(like => like === username)"
            @click="handleCancelLike(item.id)"
          >取消点赞</button>
          <button v-else @click="handleLike(item.id)">点赞</button>
          <button @click="handleShow(item.id)">评论</button>
          <button v-if="item.username === username" @click="handleDelete(item.id)">删除</button>
        </div>
        <div>
          ❤
          <span>{{item.like.join(',')}}</span>
        </div>
        <div class="m-comment-wrap">
          <div v-for="(comment,index) in item.comment" :key="index">
            <span class="m-message-username">{{comment.username}}:</span>
            {{comment.content}}
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible="visible" @close="handleClose" width="240px">
      <el-input type="text" autofocus v-model="comment" placeholder="请输入评论内容"></el-input>
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
      currentId: 0,
      username: localStorage.getItem("username") || 'admin'
    };
  },
  computed: {
    messageList() {
      let messageList = JSON.parse(
        JSON.stringify(this.$store.state.messageList)
      );
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
    handleShow(id) {
      this.comment = "";
      this.currentId = id;
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    handleLike(id) {
      this.$store.dispatch({ type: "like", id, username: this.username });
    },
    handleCancelLike(id) {
      this.$store.dispatch({ type: "cancelLike", id, username: this.username });
    },
    handleConfirm() {
      let comment = {
        username: this.username,
        content: this.comment
      };
      this.$store.dispatch({ type: "comment", id: this.currentId, comment });
      this.visible = false;
    },
    handleDelete(id) {
      this.$store.dispatch({ type: "deleteMessage", id });
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