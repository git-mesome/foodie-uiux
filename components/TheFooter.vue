<template>
  <div class="footer-background">
    <div class="footer">
      <div class="explain">
        <p>대표 <span> 김민서</span> | 전화 <span>010-2705-1278</span></p>
        <p>주소 <span>대전광역시 유성구 동서대로 125(덕명동) 한밭대학교, 자동화관 503호</span></p>
        <p>이메일 <span>kms12782@gmail.com</span></p>
        <p>이용약관  개인정보 처리 방침   위치기반서비스 이용약관</p>
      </div>
      <div>
        <a href="https://medium.com/@Minseo-dev">
          <el-image src="medium.png"
                    style="height: 50px; margin-left: 50px;margin-right: 10px"></el-image>
        </a>
        <a href="https://github.com/Minseo-dev">
          <el-image src="github.png" style="height: 50px; margin-right: 10px"></el-image>
        </a>
        <a href="https://www.instagram.com/inthesamexoat/">
          <el-image src="instagram.png" style="height: 50px"></el-image>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
.footer-background {
  background-color: #E8F5F3;
  height: 400px;
  background-image: url("/posts/blob-scatter-haikei.svg");
}

.footer p {
  font-family: "Nanum Gothic Coding", sans-serif;
  color: #868b94;
  margin-bottom: 5px;
  font-weight: bold;
}

.footer span {
  font-family: "Nanum Gothic Coding", sans-serif;
  font-weight: lighter;
}

.footer {
  display: flex;
  align-items: flex-start;
  margin-left: 10%;
  margin-top: 10%;
}


</style>
