<template>
  <div class="detailPage">
    <el-carousel type="card" :autoplay="false" arrow="always" indicator-position="none">
      <el-carousel-item v-for="(path, i) in $store.state.postDetail.postImagePath" :key="i">
        <div v-if="$store.state.postDetail.dealStatus === 'BOOK'" class="image-cover">
          <p>예약중</p>
        </div>
        <div v-else-if="$store.state.postDetail.dealStatus === 'FINISH'" class="image-cover2">
          <pre>거래 완료</pre>
        </div>
        <el-image style="height: 400px; width: 100%" :fit="fit" :src="path" alt="게시한 이미지" :preview-src-list="path"/>
      </el-carousel-item>
    </el-carousel>
    <div class="author">
      <span class="author-left">
        <el-avatar :size="70"
                   :src="$store.state.postDetail.authorProfilePath"
                   style="margin-left: 13px" alt="작성자프로필"/>
        <span class="author-info">
        {{ $store.state.postDetail.authorNickname }}
             <span class="grade">{{ $store.state.postDetail.authorGrade }}   </span>
          <span style="font-family: 'Noto Sans KR'">
            {{ $store.state.postDetail.siGunGu || "" }} {{ $store.state.postDetail.eupMyeonDong || "지역정보없음" }}</span>
        </span>
      </span>
      <el-button v-if="!($store.state.postDetail.authorNickname === $store.state.auth.loginInfo.nickname)" class="enter-chat" icon="el-icon-s-promotion"
                 @click="doChat($store.state.postDetail.postId)">채팅하기
      </el-button>
    </div>
    <el-divider></el-divider>
    <p class="title-header">
      <span class="title">{{ $store.state.postDetail.title }}</span>
      <span class="like-button"> <el-image v-if="$store.state.postDetail.likesState" src="heart.png"
                                           @click="unLike($store.state.postDetail.postId)"></el-image>
                <el-image v-else src="heartgray.png" @click="like($store.state.postDetail.postId)"></el-image></span>
    </p>
    <p class="category">카테고리 - {{ $store.state.postDetail.category }} 🌱 게시 날짜
      {{ $store.state.postDetail.createDate.split(" ")[0] }}</p>
    <pre class="content">{{ $store.state.postDetail.content }}</pre>
    <p class="detail" style="color: #9B9B9B; margin-bottom: 16px">
      관심 {{ $store.state.postDetail.likesCount }} 조회 {{ $store.state.postDetail.hit }}
    </p>
    <el-button-group v-if="$store.state.auth.loginInfo.nickname === $store.state.postDetail.authorNickname">
      <el-button icon="el-icon-edit"></el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deletePost($store.state.postDetail.postId)"></el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      postDetail: {},
      path: [],
      fit: 'cover'
    }
  },
  async created() {
    await this.$store.dispatch('fetchPostDetail', this.$route.path.split("/")[2]);
  },
  methods: {
    async like(postId) {
      await this.$store.dispatch('fetchLikes', postId);

    },
    async unLike(postId) {
      await this.$store.dispatch('fetchUnlikes', postId);
    },
    deletePost(postId) {
      this.$confirm('게시물을 삭제하시겠습니까?')
        .then(async _ => {
          await this.$axios.delete(`/api/posts/${postId}`,
            {
              headers: {
                Authorization: 'Bearer ' + this.$store.state.auth.loginInfo.accessToken
              }
            });
          this.$message({
            message: '게시물을 삭제하였습니다.',
            type: 'success',
          })
          await this.$router.push(`/posts/${this.$store.state.postDetail.postType}`);
        })
    },
    async doChat(id) {
      const response =
        await this.$axios.post(`/api/chats/${id}`, {
        headers: {
          Authorization: 'Bearer ' + this.$store.state.auth.loginInfo.accessToken
        }
      });
      // await this.$store.dispatch('fetchMessage', response.data.chatRoomId)
      await this.$router.push({name: 'chats', query: {id: response.data.chatRoomId}})
    },
  }
}
</script>
<style scoped>
.detailPage {
  width: 62vw;
  margin-left: 20%;
  height: auto;
}

.el-carousel__item {
  top: 30px;
  width: 30%;
  height: 400px;
  background-color: black;
  border-radius: 20px;
  box-shadow: 0 2px 40px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}

.author {
  display: flex;
  height: 45px;
  justify-content: space-between;
  align-items: center;

}

.author-info {
  display: flex;
  font-family: "Noto Sans KR", sans-serif !important;
  flex-wrap: wrap;
  width: 150px;
  margin-left: 12px;
}

.author-left {
  display: flex;
  justify-content: left;
  font-size: 20px;
}

.grade {
  padding-left: 10px;
  font-family: "Noto Sans KR", sans-serif !important;
  font-size: 20px;
}

.enter-chat {
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #18A48A;
  color: white;
  width: 150px;
  height: 55px;
  font-size: 17px;
  border-radius: 15px;
  padding: 12px 35px;
}

.title-header {
  display: flex;
  height: 45px;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 20px;
  font-family: "Nanum Gothic Coding";
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  display: flex;
  justify-content: left;
}

.like-button {
  display: flex;
  justify-content: left;
}

.category {
  margin-top: 4px;
  font-family: "Noto Sans KR";
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.3px;
  color: #868e96;
}

.content {
  font-family: "Nanum Gothic Coding";
  font-size: 17px;
  line-height: 1;
  letter-spacing: -0.3px;
  margin: 16px 0;
  word-break: break-all;
}

.detail {
  justify-content: left;
}

.el-button-group {
  display: flex;
  margin-bottom: 10px;
  justify-content: right;
}


.image-cover {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #BFE4E0;
  background-color: rgba(55, 55, 55, 0.7);
  border-radius: 5px;
  z-index: 1;
}

.image-cover2 {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  color: lightcoral;
  background-color: rgba(55, 55, 55, 0.7);
  border-radius: 5px;
  z-index: 1;
}

</style>
