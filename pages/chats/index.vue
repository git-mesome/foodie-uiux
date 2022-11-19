<template>
  <div>
    <el-row class="outside">
      <el-col class="left">
        <DashBoard/>
      </el-col>
      <el-col class="chat-view">
        <el-row class="top">
          <TopTitle/>
        </el-row>
        <el-row class="chat-item">
          <el-col class="middle">
            <ChatList @selectChatRoom="selectChatRoom"/>
          </el-col>
          <el-col class="right">
            <Message v-if="selectedChatRoom" :selected-chat-room="selectedChatRoom" @refresh="refreshChatRoom"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DashBoard from "../../components/chat/DashBoard";
import Message from "../../components/chat/Message";
import TopTitle from "../../components/chat/TopTitle";
import ChatList from "../../components/chat/ChatList";

export default {
  components: {ChatList, Message, DashBoard, TopTitle},
  layout: 'chat',
  data() {
    return {
      selectedChatRoom: undefined,
    }
  },
  created() {
    this.selectedChatRoom =  this.$route.query.id ?
      {
        chatRoomId: this.$route.query.id,
        postId: this.$store.state.postDetail.postId,
        postTitle: this.$store.state.postDetail.title,
        postImagePath: this.$store.state.postDetail.postImagePath[0],
        dealStatus: this.$store.state.postDetail.dealStatus
      } : undefined
  },
  methods: {
    selectChatRoom(chatRoom) {
      this.selectedChatRoom = undefined
      setTimeout(() => {
        this.selectedChatRoom = chatRoom
      });
    },
    refreshChatRoom(dealStatus) {
      this.selectedChatRoom.dealStatus = dealStatus
    }
  },
}
</script>

<style scoped>
.outside {
  /*background-color: #FFFFFF;*/
  background-color: white;
  display: flex;
  width: 80vw;
  height: 80vh;
  border-radius: 20px;
  box-shadow: 0 2px 80px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.left {
  height: 100%;
  width: 300px;
  border-radius: 20px 0 0 20px;
  border-right: #EDF0F4 solid;
  border-right-width: 1px;
}

.top {
  height: 110px;
  width: 100%;
  border-radius: 0 20px 0 0;
  border-bottom: #EDF0F4 solid;
  border-bottom-width: 1px;
}

.right {
  height: 100%;
  width: 70%;
}

.middle {
  height: 100%;
  width: 35%;
}

.chat-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.chat-item {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
