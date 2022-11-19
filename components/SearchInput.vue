<template>
  <el-row class="search-input">
    <el-input  v-model="searchKeyword" placeholder="원하는 식품을 검색하세요." clearable/>
    <el-button class="search-button" @click="search" icon="el-icon-search">검색</el-button>
  </el-row>
</template>

<script>
export default {
  name: "SearchInput",
  // props: {
  //   value: {
  //     type: String,
  //     default: () => '',
  //   },
  // },
  data() {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchKeyword)
      this.searchKeyword=""
    }
  }
}
</script>

<style scoped>
.search-input {
  display: flex;
  width: 500px;
}

.search-button {
  margin-left: 10px;
  background-color: #009281;
  border: none;
  color: white;
}
</style>
