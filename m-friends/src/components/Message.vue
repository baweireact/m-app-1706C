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
              <span class="m-menu-item" @click="handleShow(item.id)">评论</span>
            </div>
          </div>
        </div>
        <div v-if="item.like.length > 0">
          ❤
          <span>{{item.like.join(',')}}</span>
        </div>
        <div class="m-comment-wrap">
          <div v-for="(comment,index) in item.comment" :key="index">
            <span class="m-message-username">{{comment.username}}:</span>
            <span>{{comment.content}}</span>
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
import ImageList from "./ImageList";
import Api from "../api";
import moment from "moment";
moment.locale("zh-cn");

export default {
  data() {
    return {
      visible: false,
      comment: "",
      currentId: 0,
      username: localStorage.getItem("username") || "admin",
      showMenuId: ''
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
    handleShow(id) {
      this.comment = "";
      this.currentId = id;
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    handleShowMenu(id) {
      if (this.showMenuId === '') {
        this.showMenuId = id
      } else {
        this.showMenuId = ''
      }
    },
    handleLike(id) {
      this.$store.dispatch({ type: "like", id, username: this.username });
    },
    handleCancelLike(id) {
      this.$store.dispatch({ type: "cancelLike", id, username: this.username });
    },
    handleConfirm() {
      if (this.comment === '') {
        alert('评论不能为空哦~')
        return
      }
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