<template>
  <div class="chat-list">
    <el-row class="recent">RECENT CHAT</el-row>
    <el-row class="list">
      <el-row class="one-block" :class="selectChat" v-for="chat in $store.state.chatList"
              @click.native="selectChatRoom(chat.chatRoomId, chat.postId, chat.postTitle, chat.postImagePath, chat.dealStatus)"
              :key="chat.chatRoomId">
        <el-col class="receiver-profile">
          <el-avatar :size="50"
                     :src="chat.authorNickname === $store.state.auth.loginInfo.nickname ? chat.senderProfileImagePath : chat.authorProfileImagePath"
                     alt="작성자프로필"/>
        </el-col>
        <el-col>
          <el-row class="right">
            <span class="author">{{ chat.postTitle }}</span>
            <span class="message">{{
                chat.authorNickname === $store.state.auth.loginInfo.nickname ? chat.senderNickname : chat.authorNickname
              }}</span>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  data() {
    return {
      chat: [],
      check: ''
    }
  },
  computed: {
    selectChat() {
      return this.checkToSelect('check')
    }
  },
  async created() {
    await this.initGetChat();
  },
  methods: {
    async initGetChat() {
      await this.$store.dispatch('fetchChatList');
    },
    selectChatRoom(chatRoomId, postId, postTitle, postImagePath, dealStatus) {
      this.$emit('selectChatRoom', {chatRoomId, postId, postTitle, postImagePath, dealStatus})
    },
    checkToSelect(check) {
      return this.check === check ?
        "selected" :
        "non-selected";
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: #BFE4E0;
  border-bottom: #EDF0F4 solid;
  border-bottom-width: 1px;
  padding: 21px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}

.non-selected {
  border-bottom: #EDF0F4 solid;
  border-bottom-width: 1px;
  padding: 21px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}


.chat-list {
  display: flex;
  flex-direction: column;
  height: 68vh;
  border-right: #EDF0F4 solid;
  border-right-width: 1px;
}

.recent {
  padding: 21px;
  font-size: 20px;
  height: 50px;
}

.list {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

}

.one-block {
  border-bottom: #EDF0F4 solid;
  border-bottom-width: 1px;
  padding: 21px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}

.one-block:hover {
  background-color: #DFF8D6;
}

.receiver-profile {
  width: 50px;
}

.right {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.author {
  font-size: 20px;
  font-family: "Noto Sans KR";
}

.message {
  color: #D1D5D8;
  font-family: "Noto Sans";
}
</style>
