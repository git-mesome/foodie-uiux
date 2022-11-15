<template>
  <el-container class="post-container">
    <Popular/>
    <ViewPost/>
    <el-backtop :visibility-height="0" :right="100" :bottom="200" circle @click="SaveModalOpen">➕</el-backtop>
    <SaveModal :save-modal="saveModal" @modalClose="SaveModalClose"></SaveModal>
  </el-container>
</template>

<script>
import Popular from "../../../components/post/Popular";
import ViewPost from "../../../components/post/ViewPost"
import SaveModal from "../../../components/SaveModal";

export default {
  components: {
    Popular,
    ViewPost,
    SaveModal
  },
  data() {
    return {
      saveModal: false
    }
  },
  methods: {
    SaveModalOpen() {
      this.saveModal = true;
    },

    SaveModalClose() {
      this.saveModal = false;
    },
  }
}
</script>
<style scoped>
.post-container {
  flex-direction: column;
}
.el-backtop{
  height: 90px;
  width: 90px;
  background-color: #FFFADE;
}

</style>
