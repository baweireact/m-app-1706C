<template>
  <div>
    <div class="m-post-btn-wrap">
      <button @click="handlePostMessage" class="m-post-btn">发表</button>
    </div>
    <textarea v-model="message" name id cols="30" rows="10" placeholder="请输入要发布的内容" ref="comment"></textarea>
    <div>
      <input type="file" multiple="multiple" @change="handleUpload" />
    </div>
    <ImageList :imageList="imageList"></ImageList>
  </div>
</template>

<script>
import ImageList from '../components/ImageList'
import Api from "../api";
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      imageList: [
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068324-bg.jpg"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068324-bg.jpg"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068325-clothes2.png"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068324-bg.jpg"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068324-bg.jpg"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068325-clothes2.png"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068324-bg.jpg"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068324-bg.jpg"
        // },
        // {
        //   imgUrl: "http://localhost:82/upload_images/1573267068325-clothes2.png"
        // }
      ],
      imageHeight: "auto"
    };
  },
  components: {
    ImageList
  },
  methods: {
    handlePostMessage() {
      if (this.message.trim() === "" && this.imageList.length === 0) {
        alert("不能什么都不说哦~");
        return;
      }
      Api.addMessage({ message: this.message, imageList: this.imageList }).then(res => {
        if (res.code === 200) {
          this.$router.push("/index/home");
        }
      });
    },
    handleUpload(e) {
      const data = new FormData();
      let files = e.target.files;
      files.forEach(item => {
        data.append("img", item);
      });
      axios({
        url: "/api/upload",
        data,
        method: "post",
        timeout: 1000 * 60
      }).then(res => {
        if (res.data.code === 200) {
          this.imageList = res.data.data;
        }
      });
    }
  },
  mounted() {
    this.imageHeight = window.document.documentElement.clientWidth / 3 + "px";
    this.$refs.comment.focus();
  }
};
</script>

<style>
</style>