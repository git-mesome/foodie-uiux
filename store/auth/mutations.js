export default {
  setLoginInfo(state, loginInfo) {
    state.loginInfo = loginInfo
    this.$axios.setHeader('Authorization', 'Bearer ' + loginInfo.accessToken)
  },
  logout(state) {
    state.loginInfo = {
      accessToken: '',
      nickname: '',
      accountId: '',
      profileImagePath: '',
      refreshToken: '',
    }
  },
}
