<template>
  <div class="error">
    <div class="navbar__logo">
      <el-image src="/header/nav-logo.png" style="width: 100px"></el-image>
      <nuxt-link class="logo-text" :to="{path:'/'}">Foodi:e</nuxt-link>
    </div>
    <p class="sorry">죄송합니다. 해당 페이지는 점검중입니다.</p>
    <a href="/">
      <el-button>홈으로 가기</el-button>
    </a>
    <el-image src="/error/108.svg" style=" opacity: 0.5"></el-image>

  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar__logo {
  position: absolute;
  font-size: 35px;
  top: 8%;
  left: 42%;
}

.logo-text {
  padding-top: 7px;
  padding-left: 100px;
}

.error {
  width: 100%;
  position: absolute;
  background-size: cover;
  /*background-color: #009281;*/
  height: 100%;
}
.el-image {
  position: absolute;
  top: 16%;
  left: 25%;
}

.sorry {
  font-size: 35px;
  font-family: "Noto Sans";
  font-weight: bold;
  color: #344B46;
  position: absolute;
  top: 55%;
  left: 33%;
  z-index: 1;
}

.el-button {
  position: absolute;
  top: 80vh;
  left: 45%;
  border-color: #00c58e;
  color: #00c58e;
  border-width: 3px;
  width: 150px;
  height: 55px;
  font-size: 20px;
  border-radius: 15px;
}


.el-button:hover {
  color: white;
}
</style>
