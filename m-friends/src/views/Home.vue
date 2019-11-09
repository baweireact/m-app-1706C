<template>
  <div>
    <div class="m-post-btn-wrap">
      <router-link to="/post_message" class="m-post-btn">发朋友圈</router-link>
    </div>
    <Message/>
  </div>
</template>

<script>
import Message from '../components/Message'
export default {
  components: {
    Message
  }
};
</script>

<style>
</style>