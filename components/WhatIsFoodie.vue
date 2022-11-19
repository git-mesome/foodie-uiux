<template>
  <div class="what-view">
    <el-row class="title">
      <el-image class="cover-image" src="/main-cover/intro-logo.png"></el-image>
      <pre class="foodie">About Foodi:e</pre>
    </el-row>
    <el-row>
      <el-image src="/one.png" style="padding-top: 120px; padding-right: 480px"></el-image>
    </el-row>
    <el-row class="title">
      <el-image class="cover-image2" src="/main-cover/intro-logo.png"></el-image>
      <pre class="foodie2">어떤 사람이 푸디에를 쓸까요?</pre>
    </el-row>
    <el-row>
      <el-image src="/two.png" style="padding-top: 120px; padding-left: 700px"></el-image>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "WhatIsFoodie"
}
</script>

<style scoped>
.what-view {
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url("/blob-scene-haikei.svg");
  background-size: cover;
}

.cover-image {
  position: absolute;
  padding-top: 50px;
  right: 600px;
  width: 80px;
}

.foodie {
  position: absolute;
  top: 63px;
  right: 400px;
  font-size: 30px;
}
.cover-image2 {
  position: absolute;
  padding-top: 50px;
  width: 80px;
}

.foodie2 {
  position: absolute;
  top: 63px;
  left: 90px;
  font-size: 30px;
}

</style>
