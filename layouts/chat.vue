<template>
  <el-container>
    <Nuxt/>
  </el-container>
</template>

<script>
export default {
  name: "chat.vue"
}
</script>

<style scoped>
.el-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #009281;
  height: 100vh;
  background-image: url("/chats/blob-scene-haikei.svg");
  background-size: cover;
}
</style>
