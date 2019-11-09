<template>
  <div class="m-image-list-wrap">
    <div
      v-for="(image, index) in imageList"
      :key="index"
      class="m-image-item-wrap"
      :style="{backgroundImage:`url(${image.imgUrl})`, height: imageHeight }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['imageList'],
  data() {
    return {
      imageHeight: 'auto'
    }
  },
  mounted() {
    this.imageHeight = window.document.documentElement.clientWidth / 3 + "px";
  }
};
</script>

<style>
</style>