<template>
  <el-row class="top-title">
    <el-col class="left">
      <p>Chat</p>
    </el-col>
    <el-col >
      <span class="author"> {{this.$store.state.auth.loginInfo.nickname}}
                  <el-avatar :size="50" :src="$store.state.auth.loginInfo.profileImagePath" style="margin-left: 13px" alt="작성자프로필"/>
              </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TopTitle"
}
</script>

<style scoped>
.top-title {
  display: flex;
  justify-content: space-between;
}
.left{
  font-size: 30px;
  padding: 25px;
}
.author {
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 20px;
  padding: 25px;
}
</style>
