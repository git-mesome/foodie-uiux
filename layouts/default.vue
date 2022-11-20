<template>
    <el-container>
      <el-header>
        <TheHeader/>
      </el-header>
      <Nuxt/>
        <TheFooter></TheFooter>
      <el-backtop :visibility-height="0" :right="100" :bottom="100">🔝</el-backtop>
    </el-container>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default {
  components: {TheFooter, TheHeader}

}
</script>

<style scoped>
.el-header {
  padding: 0 !important;
}

.el-main {
  width: 100vw;
  padding: 0;
  margin-top: 12px;
}

.el-backtop {
  height: 90px;
  width: 90px;
  box-shadow: black;
  font-size: 50px;
  color: #009281;
}

/*body > .el-container {*/
/*  margin-bottom: 40px;*/
/*}*/

</style>
