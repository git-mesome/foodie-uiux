<template>
  <el-container>
    <el-row class="outside">
      <el-col class="outside-left">
        <el-image class="login-cover" src="/login/login-cover.png" style="width: 470px;"></el-image>
      </el-col>
      <el-col class="outside-right">
        <el-row>
        <div class="logo">
          <el-image src="/header/nav-logo.png" style="width: 70px"></el-image>
          <nuxt-link class="logo-text" :to="{path:'/'}">Foodi:e</nuxt-link>
        </div>
        <pre class="greeting">다시 만나서 반가워요!<pre class="comment">공유하며 정을 쌓고 환경을 보호해요. 푸디에는 마음이 따듯한 이웃을 연결합니다.</pre></pre>
          <el-col class="loginBtn">
              <el-image class="login-button" @click="login" src="/login/kakao_login_medium_wide.png"/>
            <el-image class="login-button" src="/login/naver.png"/>
            <el-image  class="login-button" src="/login/google.png" style="width: 310px"/>
                  <SignUpDialog ref="SignUpDialog" :sign-up-account="account"/>
          </el-col>
        </el-row>
        <div class="info">
          <pre>계정이 없으신가요?
          </pre>
        <el-button @click="login" class="signinBtn" round icon="el-icon-right">회원가입</el-button>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import {mapMutations} from 'vuex';
import SignUpDialog from "../../components/login/SignUpDialog";
export default {
  components: { SignUpDialog },
  layout: 'auth',
  data() {
    return {
      token: '',
      account: {
        oauthId: '',
        email: '',
        profileImagePath: '',
      },
    }
  },

  methods: {
    ...mapMutations({
      setLoginInfo: 'auth/setLoginInfo',
    }),

    async login() {
      await this.kakaoLogin()
    },
    kakaoLoginFail() {
      this.$message({
        message: '카카오 로그인을 실패했습니다.',
        type: 'error',
      })
    },
    async kakaoLogin() {
      await this.$kakao.Auth.login({
        success: async (loginResponse) => {
          this.token = loginResponse.access_token
          await this.$kakao.Auth.setAccessToken(this.token)
          await this.loadOauthAccount()
          await this.checkRegistered()
        },
        fail: () => {
          this.kakaoLoginFail()
        },
      })
    },
    async loadOauthAccount() {
      await this.$kakao.API.request({
        url: '/v2/user/me',
        success: (response) => {
          this.account.oauthId = response.id
          this.account.email = response.kakao_account.email
          this.account.profileImagePath = response.kakao_account.profile.profile_image_url
        },
        fail: () => {
          this.kakaoLoginFail()
        },
      })
    },

    async checkRegistered() {
      try {
        await this.serviceLogin()
      } catch (err) {
        this.$refs.SignUpDialog.visible()
      }
    },
    async serviceLogin() {
      const response = await this.$axios.post(`/api/auth/signin`, {oauthId: this.account.oauthId})
      const loginInfo = response.data
      this.setLoginInfo({
        accountId: loginInfo.accountId,
        nickname: loginInfo.nickname,
        accessToken: loginInfo.accessToken,
        profileImagePath: loginInfo.profileImagePath,
        refreshToken: loginInfo.refreshToken,
      })
      this.$message({
        message: '로그인을 성공했습니다.',
        type: 'success',
      })
      await this.$router.push('/')
    }
  },
}
</script>
<style scoped>

.outside {
  background-color: #FFFFFF;
  display: flex;
  width: 1165px;
  height: 700px;
  border-radius: 20px;
}

.outside-left {
  background-color: #009281;
  height: 100%;
  width: 100%;
  border-radius: 20px 0 0 20px;
}

.logo {
  margin-top: 54px;
  align-items: stretch;
  margin-left: 200px;
  font-size: 24px;
}
.greeting {
  font-size: 30px;
  text-align: center;
  margin-top: 10px;
}
.comment{
  font-size: 13px;
  margin-left: 50px;
  color: gray;
}

.loginBtn{
  margin-top: 100px;
  text-align: center;
  justify-content: center;
}

.info{
  color: lightgray;
  margin-top: 100px;
  margin-left: 230px;
}

.signinBtn{
  color: white;
  background-color: #009281;
}

.login-button {
  cursor: pointer;
  width: 300px;
  margin-bottom: 10px;
}

.login-cover{
  margin-top: 80px;
  margin-left: 70px;
}

</style>
