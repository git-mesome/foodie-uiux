<template>
  <el-row class="top-title">
    <el-col class="left">
      <p>Chat</p>
    </el-col>
    <el-col>
      <div class="author">
        <el-button class="home" icon="el-icon-s-home"
                   @click="doHome">Home
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods:{
    doHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.top-title {
  display: flex;
  justify-content: space-between;
}

.left {
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

.home {
  display: flex;
  justify-content: right;
  text-align: center;
  align-items: center;
  border-color: #00c58e;
  border-width: 2px;
  color: #00c58e;
  width: 120px;
  height: 55px;
  font-size: 17px;
  border-radius: 15px;
  margin: 10px;
  padding: 12px 30px;
}

.home:hover{
  color: white;
}
</style>
