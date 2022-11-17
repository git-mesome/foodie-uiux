<template>
<div class="chat-list">
  <el-row class="recent">RECENT CHAT</el-row>
  <el-row class="list">
    <el-col v-for="chat in $store.state.chatList" :key="chat.chatRoomId">
      <el-avatar :size="40" :src="chat.authorProfileImagePath" alt="작성자프로필"/>
        <span class="author" style="margin-left: 13px">{{ chat.authorNickname }}</span>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "ChatList",
  data(){
    return {
      chat: []
    }
  },
  async created(){
    await this.initGetChat();
  },
  methods:{
    async initGetChat(){
      // await this.$store.dispatch('fetchChatList',)
    }
  }
}
</script>

<style scoped>
.chat-list{
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: #EDF0F4 solid;
  border-right-width: 1px;
}
.recent{
  padding: 21px;
  font-size: 20px;
  height: 50px;
}
.list{
  /*background-color: #9B9B9B;*/
  height: 100%;
}
</style>
