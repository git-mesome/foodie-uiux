<template>
  <div class="search-post">
    <el-row class="search-result-header">'{{ $store.state.searchKeyword }}'에 대한 검색결과 입니다.
      <el-divider></el-divider>
    </el-row>

    <el-row class="popular" :gutter='20'>
      <el-col :span="6" v-for="post in $store.state.searchPosts" :key="post.postId">
        <el-card class="card" :body-style="{ padding: '15px' }">
          <div class="main_image">
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
                <el-image style="margin: 7px" src="countheart.png"/> {{ post.likesCount }}
            </span>
            <span class="author">{{ post.authorNickname }}
                  <el-avatar :size="40" :src="post.authorProfileImagePath" style="margin-left: 13px" alt="작성자프로필"/>
              </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      posts: [],
    }
  },
  methods: {
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
.search-post {
  height: auto;
  flex-direction: column;
  display: flex;
}

.el-divider {
  background-color: #BFE4E0;
  align-self: center;
}

.el-divider--horizontal {
  height: 2px;
}

.search-result-header {
  margin-left: 20%;
  /*text-align: center;*/
  margin-top: 40px;
  width: 62vw;
  font-size: 30px;
  height: 50px;
  font-family: "Noto Sans KR", sans-serif !important;
}

.popular {
  width: 62vw;
  margin-top: 50px;
  margin-bottom: 13px;
  align-self: center;
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

</style>
