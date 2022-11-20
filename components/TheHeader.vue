<template>
  <el-menu class="navbar" mode="horizontal">
    <div class="navbar__logo">
      <el-image src="/header/nav-logo.png" style="width: 70px"></el-image>
      <nuxt-link class="logo-text" :to="{path:'/'}">Foodi:e</nuxt-link>
    </div>
    <ul class="navbar__menu">
      <el-menu-item index="2" style="width: 100% " align="center">
        <nuxt-link :to="{path:'/'}">Home</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3" style="width: 100%" align="center">
        <nuxt-link :to="{path:'/posts/free'}">나눔</nuxt-link>
      </el-menu-item>
      <el-menu-item index="4" style="width: 100%" align="center">
        <nuxt-link :to="{path:'/posts/exchange'}">교환</nuxt-link>
      </el-menu-item>
      <el-menu-item index="5" style="width: 100%" align="center">
        <nuxt-link :to="{path:'/posts/recipe'}">레시피</nuxt-link>
      </el-menu-item>
      <el-menu-item index="5" style="width: 100%" align="center">
        <nuxt-link :to="{path:'/customer'}">고객센터</nuxt-link>
      </el-menu-item>
    </ul>
    <SearchInput @search="searchPostList"/>

    <el-menu-item class="navbar__user" index="7">
      <nuxt-link v-if="!$store.state.auth.loginInfo.accessToken" :to="{path:'/login'}">로그인</nuxt-link>
      <div v-else>
        <el-dropdown>
          <el-image @click="enterChatRoom" src="chat-box.png" style="width: 48px; margin-right: 10px"></el-image>
        </el-dropdown>
        <el-dropdown>
          <span>{{ $store.state.auth.loginInfo.nickname }}님<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><nuxt-link :to="{path:'/my-page'}">마이 페이지</nuxt-link></el-dropdown-item>
            <el-dropdown-item   ><nuxt-link :to="{path:'/customer'}">F&Q</nuxt-link></el-dropdown-item>
            <el-dropdown-item   ><nuxt-link :to="{path:'/customer'}">고객센터</nuxt-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button @click="logout">로그아웃</el-button>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {mapMutations} from "vuex";
import SearchInput from "../components/SearchInput";

export default {
  components: {SearchInput},
  methods: {
    ...mapMutations({
      doLogout: 'auth/logout',
    }),
    logout() {
      this.doLogout()
    },
    async searchPostList(keyword) {
      await this.$store.dispatch('fetchSearchPosts', keyword);
      await this.$router.push('/posts/search')
    },
    enterChatRoom(){
      this.$router.push('/chats');
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover,
a.nuxt-link-exact-active {
  color: var(--primary-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 73px;
  z-index: 1;
}

.navbar__logo {
  position: absolute;
  font-size: 24px;
}

.logo-text {
  position: absolute;
  margin-top: 15px;
  margin-left: 10px;
  font-family: 'Fredoka One', cursive;
  color: black !important;
}

.navbar__menu {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.el-menu-item {
  font-size: 16px;
}

.navbar__user {
  position: absolute;
  right: 0;
}


</style>
