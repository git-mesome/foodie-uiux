<template>
  <div class="view-post">
    <el-row class="view-post-header">
      나눠봐요!
    </el-row>
    <el-tabs class="tabs" v-model="activeName">
      <el-tab-pane></el-tab-pane>
      <el-row class="popular" :gutter='20'>
        <el-col :span="6" v-for="post in $store.state.posts" :key="post.postId">
          <el-card class="card" style="overflow:auto" :body-style="{ padding: '15px' }">
            <div class="main_image">
              <div v-if="post.dealStatus === 'BOOK'" class="image-cover">
                <p>예약중</p>
              </div>
              <div v-else-if="post.dealStatus === 'FINISH'" class="image-cover2">
                <pre>거래 완료</pre>
              </div>
              <el-image @click="moveDetailPage(post.postId)" style="width:100%; height: 250px; border-radius: 20px"
                        :fit="fit"
                        :src="post.postImagePath" alt="게시글 이미지"/>
              <div class="like-button">
                <el-image v-if="post.likesState" src="heart.png" @click="unLike(post.postId)"></el-image>
                <el-image v-else src="unheart.png" @click="like(post.postId)"></el-image>
              </div>
            </div>
            <span class="title">{{ post.title }}</span>
            <span v-if="post.dong" class="dong"
                  style="color: #9B9B9B; font-family: Noto Sans KR, sans-serif;">{{ post.gu }} {{ post.dong }}</span>
            <span v-else class="dong" style="color: #9B9B9B; font-family: Noto Sans KR, sans-serif;">지역 정보 없음</span>
            <div class="bottom">
            <span class="likes-count" style="color: #9B9B9B">
                <el-image style="margin: 7px" src="countheart.png"/>
                  {{ post.likesCount }}
            </span>
              <span class="author">{{ post.authorNickname }}
                  <el-avatar :size="40"
                             :src="post.authorProfileImagePath"
                             style="margin-left: 13px" alt="작성자프로필"/>
              </span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "ViewPost",
  data() {
    return {
      activeName: "",
      posts: [],
      fit: 'cover'
    }
  },
  async created() {
    await this.initGetProduct();
  },
  methods: {
    async initGetProduct() {
      const path = this.$route.path.split("/")[2];
      await this.$store.dispatch('fetchPosts', path);
    },
    async moveDetailPage(id) {
      await this.$store.dispatch('fetchPostDetail', id);
      await this.$router.push(`/posts/${id}`);
    },
    async like(postId) {
      await this.$store.dispatch('fetchLikes', postId);

    },
    async unLike(postId) {
      await this.$store.dispatch('fetchUnlikes', postId);
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Jua:400');

.view-post {
  background-color: #DFF8D6;
  height: auto;

}

.view-post-header {
  /*font-family: "Jua";*/
  font-size: 40px;
  font-weight: lighter;
  text-align: center;
  margin-top: 39px;
}

.el-tabs {
  width: 62vw;
  margin-left: 20%;
}


.popular {
  margin-top: 13px;
  margin-right: 27%;
  margin-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  width: 62vw;
}

.card {
  margin-bottom: 20px;
}

.main_image {
  cursor: pointer;
  position: relative;
}

.title {
  display: flex;
  justify-content: left;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  width: 100%;
  height: 36px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Noto Sans KR", sans-serif;
}

.author {
  display: flex;
  justify-content: right;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif !important;
  font-size: 15px;
}

.likes-count {
  display: flex;
  justify-content: left;
  align-items: center;
}

.bottom {
  display: flex;
  height: 45px;
  justify-content: space-between;
  align-items: center;
}

.like-button {
  position: absolute;
  top: 80%;
  left: 3%;
}

.image-cover {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  color: #BFE4E0;
  background-color: rgba(55, 55, 55, 0.7);
  border-radius: 5px;
  z-index: 100;
}

.image-cover2 {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  color: lightcoral;
  background-color: rgba(55, 55, 55, 0.7);
  border-radius: 5px;
  z-index: 100;
}
</style>
