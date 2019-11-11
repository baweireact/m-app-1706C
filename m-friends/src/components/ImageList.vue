<template>
  <div class="m-image-list-wrap">
    <div
      v-for="(image, index) in imageList"
      :key="index"
      class="m-image-item-wrap"
      :style="{backgroundImage:`url(${image.imgUrl})`, height: imageHeight }"
      @click="handleShowBigImage(image.imgUrl)"
    ></div>
    <BigImage :bigImagUrl="bigImagUrl" :visible="bigImageVisible" :onHideBigImage="handleHideBigImage"></BigImage>
  </div>
</template>

<script>
import BigImage from "./BigImage";

export default {
  props: ["imageList"],
  data() {
    return {
      imageHeight: "auto",
      bigImagUrl: "",
      bigImageVisible: false
    };
  },
  components: {
    BigImage
  },
  methods: {
    handleShowBigImage(imgUrl) {
      this.bigImagUrl = imgUrl
      this.bigImageVisible = true
    },
    handleHideBigImage() {
      this.bigImageVisible = false
    }
  },
  mounted() {
    this.imageHeight = window.document.documentElement.clientWidth / 3 + "px";
  }
};
</script>

<style>
</style>