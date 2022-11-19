<template>
  <div class="intro">
    <el-row class="title">
      <el-image class="cover-image" src="/main-cover/intro-logo.png"></el-image>
      <pre>
      푸디와 함께
          환경을 보호해요.
      </pre>
    </el-row>
    <el-row>
      <el-row style="position: absolute; top:200px; right: 100px; z-index: 1">
        <p class="text">푸디에 올라와있는 게시글 수
        <span class="number">24,445,418</span></p>
        <p class="text">그에 따라 심어진 나무 수
        <span class="number">12.541</span></p>
        <span style="color:#17816E;font-family: 'Noto Sans KR'; font-size: 12px">* 나무 한 그루당 6.6kg의 탄소 흡수</span>

      </el-row>
      <el-image src="tree.png" style="position:absolute; left:100px; top: 200px;width: 400px"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped>
.intro {
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url("/main-cover/layered-waves-haikei (1).svg");
  background-size: cover;
  background-color: #FBFFF5;
}

.text{
  font-size: 20px;
  font-family: "Noto Sans KR";
  color: #17816E;
}
.number{
  font-size: 80px;
  font-family: "Noto Sans KR";
}

.cover-image {
  position: absolute;
  padding-top: 50px;
  right: 490px;
  width: 100px;
}

pre {
  position: absolute;
  top: 60px;
  right: 280px;
  font-size: 30px;
}
</style>
