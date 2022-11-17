<template>
  <el-row class="outline">
      <el-col class="top">
        <el-col>
          <el-image src="github.png" style="width: 60px;"></el-image>
          <span class="title">dddddddd</span>
        </el-col>
        <el-col class="button">
          <el-button>거래 상태 변경</el-button>
          <el-button>채팅 삭제</el-button>
        </el-col>
      </el-col>
      <el-col class="mid">

      </el-col>
      <el-col class="bottom">
        <el-input class="text"
                  type="textarea"
                  resize="none"
                  :row="2" placeholder="보낼 메시지를 작성하세요 ..." v-model="textarea"/>
        <el-button class="send-button" icon="el-icon-s-promotion"/>
      </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      textarea: ''
    }
  }
}
</script>

<style scoped>
.outline {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}

.top {
  display: flex;
  background-color: #EDF0F4;
  align-items: center;
  border-bottom: #E5E7EC solid;
  border-bottom-width: 2px;
  padding: 20px;
  border-radius: 20px 20px 0 0;
}

.mid {
  /*background-color: yellow;*/
  background-color: #EDF0F4;
  height: 100%;
}

.bottom {
  display: flex;
  background-color: #EDF0F4;
  justify-content: center;
  padding: 20px;
  height: 110px;
  border-radius: 0 0 20px 20px;
}

.text {
  width: 100%;
  justify-content: center;
  /*box-shadow: 0 1px 80px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/

}

.send-button {
  position: absolute;
  right: 50px;
  bottom: 47.5px;
  background-color: #18A48A;
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 15px;
}


.button {
  display: flex;
  justify-content: flex-end;
}

.title {
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
}
</style>
