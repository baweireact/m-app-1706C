<template>
  <div class="m-big-image-wrap" :class="{active: visible}" @click="onHideBigImage">
    <img :src="bigImagUrl" alt="" class="m-big-image">
  </div>
</template>

<script>
export default {
  props: ["bigImagUrl", "visible", "onHideBigImage"]
}
</script>

<style>

</style>