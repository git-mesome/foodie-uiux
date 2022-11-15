<template>
  <el-container>
    <el-row class="popular-header">
      <el-divider>⭐ 푸디에 인기 식품 ⭐</el-divider>
    </el-row>
    <el-row class="popular" :gutter="20">
      <el-col :span="6" v-for="post in $store.state.populars" :key="post.postId">
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
                <el-image style="margin: 7px" src="countheart.png"/>{{ post.likesCount }}
            </span>
            <span class="author">{{ post.authorNickname }}
                  <el-avatar :size="40" :src="post.authorProfileImagePath" style="margin-left: 13px" alt="작성자프로필"/>
              </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="custom-shape-divider-bottom-1668172548">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
      </svg>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "Popular",
  data() {
    return {
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
      await this.$store.dispatch('fetchPopularPosts', path);
    },
    async moveDetailPage(id) {
      await this.$store.dispatch('fetchPostDetail', id);
      await this.$router.push(`posts/${id}`);
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

.el-container {
  flex-direction: column;
}

.custom-shape-divider-bottom-1668172548 {
  width: 100%;
  height: 140px;
  fill: #DFF8D6;
}

.el-divider {
  background-color: #BFE4E0;
}

.el-divider--horizontal {
  height: 2px;
}

.el-divider__text {
  font-family: "Jua";
  font-size: 40px;
  font-weight: lighter;
}

.popular-header {
  margin-top: 40px;
  align-self: center;
  width: 62vw;
  height: 50px;
}

.popular {
  width: 62vw;
  margin-top: 13px;
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
