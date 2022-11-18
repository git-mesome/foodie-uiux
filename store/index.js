export const state = () => ({
  posts: [],
  postDetail: {},
  searchKeyword: "",
  searchPosts: [],
  populars: [],
  likes: {},
  unlikes: {},
  chatList: [],
  message: [],
})

export const mutations = {
  setPostDetail(state, postDetail) {
    state.postDetail = postDetail;
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
  setSearchKeyword(state, keyword) {
    state.searchKeyword = keyword;
  },
  setSearchPosts(state, searchPosts) {
    state.searchPosts = searchPosts;
  },
  setPopular(state, populars) {
    state.populars = populars;
  },
  setChatList(state, chatList) {
    state.chatList = chatList;
  },
  setMessage(state, message) {
    state.message = message;
  },
  setLikes(state, postId) {
    const post = state.posts.filter(post => post.postId === postId).pop()
    if (state.postDetail) {
      state.postDetail.likesState = true
      state.postDetail.likesCount++
    }
    post.likesState = true
    post.likesCount++
  },
  setUnlikes(state, postId) {
    const post = state.posts.filter(post => post.postId === postId).pop()
    if (state.postDetail) {
      state.postDetail.likesState = false
      state.postDetail.likesCount--
    }
    post.likesState = false
    post.likesCount--
  }
}

export const actions = {
  async fetchPostDetail(context, id) {
    const response = await this.$axios.get(`/api/posts/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
        }
      });
    context.commit('setPostDetail', response.data);
  },
  async fetchPosts(context, query) {
    const response = await this.$axios.get(`/api/posts?postType=${query}`, {
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setPosts', response.data);
  },
  async fetchSearchPosts(context, keyword) {
    const response = await this.$axios.get(`/api/posts/search?keyword=${keyword}`, {
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setSearchKeyword', keyword);
    context.commit('setSearchPosts', response.data);
  },
  async fetchPopularPosts(context, path) {
    const response = await this.$axios.get(`/api/posts?postType=${path}&hit=popular`, {
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setPopular', response.data);
  },
  async fetchChatList(context) {
    const response = await this.$axios.get(`/api/chats`, {
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setChatList', response.data);
  },
  async fetchMessage(context,id){
    const response = await this.$axios.get(`/api/chats/${id}`,{
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setMessage',response.data);
  },
  async fetchLikes(context, id) {
    await this.$axios.post(`/api/posts/${id}/likes`, {}, {
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setLikes', id);
  },
  async fetchUnlikes(context, id) {
    await this.$axios.delete(`/api/posts/${id}/likes`, {
      headers: {
        Authorization: 'Bearer ' + context.state.auth.loginInfo.accessToken
      }
    });
    context.commit('setUnlikes', id);
  }
}
