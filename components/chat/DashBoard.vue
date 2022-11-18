<template>
<div class="dash-board">
  <div class="logo">
  <el-image src="/header/nav-logo.png" style="width: 70px"></el-image>
  <nuxt-link class="logo-text" :to="{path:'/'}">Foodi:e</nuxt-link>
  </div>
  <div class="author">
  <el-avatar :size="150" :src="$store.state.auth.loginInfo.profileImagePath" style="margin-left: 13px"
    alt="작성자프로필"/>
    <p>🌱 {{ $store.state.auth.loginInfo.nickname }} 🌱</p>
  </div>
  <div class="icons">
    <el-button><i class="el-icon-menu"></i> 전체 보기</el-button>
    <el-button><i class="el-icon-present"></i> 나눔</el-button>
    <el-button><i class="el-icon-connection"></i> 교환</el-button>
  </div>
  <div class="setting">
    <el-button><i class="el-icon-setting"></i> 설정</el-button>
    <el-button><i class="el-icon-switch-button"></i> 로그아웃</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "DashBoard"
}
</script>

<style scoped>
.dash-board{
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo{
  margin-top: 30px;
  margin-left: 50px;
  font-size: 18px;
}
.icons{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  flex: 4 1 0;
}
.setting{
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin-bottom: 20px;
  justify-content: center;
}
.el-button{
  display: flex;
  font-size: 20px;
  text-align: left;
  color: #B5BAC9;
  margin: 10px;
  border: 0px;
}
.author{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #344B46;
  font-size: 25px;
}

.author .el-avatar {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
