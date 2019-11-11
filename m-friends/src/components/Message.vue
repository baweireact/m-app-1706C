<template>
  <div>
    <div>
      <div v-for="item in messageList" :key="item.id" class="m-message-list-item">
        <div class="m-message-username">{{item.username}}</div>
        <div>{{item.message}}</div>
        <ImageList :imageList="item.imageList"></ImageList>
        <div class="m-info">
          <span class="m-message-time">{{item.createTime}}</span>
          <span
            class="m-message-delete-btn"
            v-if="item.username === username"
            @click="handleDelete(item.id)"
          >删除</span>
          <span class="m-menu-btn" @click="handleShowMenu(item.id)">··</span>
          <div class="m-menu-wrap" :class="{active: showMenuId === item.id }">
            <div class="m-menu">
              <span
                class="m-menu-item"
                v-if="item.like.find(like => like === username)"
                @click="handleCancelLike(item.id)"
              >取消</span>
              <span class="m-menu-item" v-else @click="handleLike(item.id)">赞</span>
              <span class="m-menu-item" @click="handleShowCommentDialog(item.id)">评论</span>
            </div>
          </div>
        </div>
        <div v-if="item.like.length > 0">
          ❤
          <span>{{item.like.join(',')}}</span>
        </div>
        <div class="m-comment-wrap">
          <div
            v-for="(comment,index) in item.comment"
            :key="index"
            @click="handleShowReplyDialog(comment.username, item.id)"
          >
            <span class="m-message-username">{{comment.username}}</span>
            <span v-if="comment.replyUsername">
              <span class="m-reply-text">回复</span>
              <span class="m-message-username">{{comment.replyUsername}}</span>
            </span>
            <span class="m-message-username">:</span>
            <span>{{comment.content}}</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible="commentVisible" @close="handleClose" width="240px">
      <el-input type="text" autofocus v-model="comment" placeholder="请输入评论内容"></el-input>
      <div slot="footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button @click="handleConfirm">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible="replyVisible" @close="handleClose" width="240px">
      <el-input type="text" autofocus v-model="comment" :placeholder="`请输入回复${replyUsername}的内容`"></el-input>
      <div slot="footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button @click="handleConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ImageList from "./ImageList";
import Api from "../api";
import moment from "moment";
moment.locale("zh-cn");

export default {
  data() {
    return {
      commentVisible: false,
      comment: "",
      currentId: 0,
      username: localStorage.getItem("username") || "admin",
      showMenuId: "",
      replyUsername: "",
      replyVisible: false
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
  components: {
    ImageList
  },
  methods: {
    //显示评论对话框
    handleShowCommentDialog(id) {
      this.comment = "";
      this.currentId = id;
      this.commentVisible = true;
    },
    //显示回复对话框
    handleShowReplyDialog(username, id) {
      if (username !== this.username) {
        this.replyUsername = username;
        this.replyVisible = true;
        this.comment = "";
        this.currentId = id;
      }
    },
    //评论和回复对话框点击确定时都走这
    handleConfirm() {
      if (this.comment === "") {
        alert("内容不能为空哦~");
        return;
      }
      let comment = {
        username: this.username,
        replyUsername: this.replyUsername,
        content: this.comment
      };
      this.$store.dispatch({ type: "comment", id: this.currentId, comment });
      this.handleClose();
    },
    //关闭所有对话框
    handleClose() {
      this.commentVisible = false;
      this.replyVisible = false;
    },
    //显示点赞和评论菜单
    handleShowMenu(id) {
      if (this.showMenuId === "") {
        this.showMenuId = id;
      } else {
        this.showMenuId = "";
      }
    },
    //点赞
    handleLike(id) {
      this.$store.dispatch({ type: "like", id, username: this.username });
    },
    //取消点赞
    handleCancelLike(id) {
      this.$store.dispatch({ type: "cancelLike", id, username: this.username });
    },
    //删除朋友圈
    handleDelete(id) {
      this.$store.dispatch({ type: "deleteMessage", id });
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getMessageList" });
  }
};
</script>

<style>
</style>