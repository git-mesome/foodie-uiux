<template>
  <div class="earth">
    <el-row>
      <el-image class="cover-image" src="/earth.png"></el-image>
      <pre class="foodie">지구를 지키자!</pre>
    </el-row>
    <el-row>
      <div class="texts">
        <pre class="text">🌏 WFP : 전세계 생산식략 40억톤 중 1/3 손실, 낭비</pre>
        <pre class="text">🌍 식품 처리 과정에서 연간 1조달러(한화 1170조원) 손실 발생</pre>
        <pre class="text">🌏 대한민국 환경부 : 하루 평균 약 1만 590톤의 음식물 쓰레기 배출</pre>
        <pre class="text">🌎 음식물 쓰레기의 약 70%, 가정과 음식점에서 배출</pre>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.earth {
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #D4EAFE;
  background-image: url("/stacked-waves-haikei (1).svg");
  background-size: contain;

  background-repeat: no-repeat;
  background-position-y: bottom;
}

.cover-image {
  position: absolute;
  padding-top: 50px;
  right: 600px;
  width: 80px;
}

.foodie {
  position: absolute;
  top: 80px;
  right: 400px;
  font-size: 30px;
}

.texts {
  position: absolute;
  top: 200px;
  right: 1%;
  font-size: 25px;
}

.text{
  font-family: "Noto Sans KR";
  padding-bottom: 20px;
}
</style>
