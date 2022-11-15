<template>
  <el-dialog class="management-dialog" width="600px" :show-close="false" :visible.sync="dialogVisible">
    <template #title>
      <div class="management-dialog-title">회원가입</div>
    </template>
    <el-form ref="SignUpForm" :model="form" :rules="rules" label-position="left" label-width="80px">
      <el-row class="sign-up-dialog-form-row">
        <el-form-item prop="nickname" label="별명">
          <el-input v-model="form.nickname" placeholder="별명 입력"/>
        </el-form-item>
      </el-row>
      <el-row class="sign-up-dialog-form-row">
        <el-form-item prop="phoneNumber" label="전화번호">
          <el-input v-model="form.phoneNumber" placeholder="전화번호 입력"/>
        </el-form-item>
      </el-row>
      <el-divider class="management-form-divider"/>
      <el-row type="flex" justify="center" align="center">
        <el-button class="management-dialog-confirm-button management-dialog-buttons" @click="confirm">
          <el-row :gutter="5">
            <el-col :span="11">
              <i class="el-icon-circle-check management-dialog-confirm-icon"></i>
            </el-col>
            <el-col :span="13">
              확인
            </el-col>
          </el-row>
        </el-button>
        <el-button class="management-dialog-cancel-button management-dialog-buttons" @click="cancel">
          <el-row :gutter="5">
            <el-col :span="11">
              <i class="el-icon-circle-close management-dialog-cancel-icon"></i>
            </el-col>
            <el-col :span="13">
              취소
            </el-col>
          </el-row>
        </el-button>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "SignUpDialog",
  props: {
    signUpAccount: {
      type: Object,
      default: () => ({
        oauthId: '',
        email: '',
        profileImagePath: '',
      })
    }
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        nickname: '',
        phoneNumber: '',
      },
      rules: {
        nickname: [
          {required: true, message: '이름을 반드시 입력해주세요.', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, message: '전화번호를 반드시 입력해주세요.', trigger: 'blur'}
        ],
      }
    }
  },


  methods: {
    ...mapMutations({
      setLoginInfo: 'auth/setLoginInfo',
    }),
    visible() {
      this.dialogVisible = true

    },
    confirm() {
      this.$refs.SignUpForm.validate(async (valid) => {
        if (valid) {
          try {
            const response = await this.$axios.post(`/api/auth/signup`, {
              oauthId: this.signUpAccount.oauthId,
              nickname: this.form.nickname,
              email: this.signUpAccount.email,
              profileImagePath: this.signUpAccount.profileImagePath.replace("http", "https"),
              phoneNumber: this.form.phoneNumber,
            })
            const loginInfo = response.data
            this.setLoginInfo({
              accountId: loginInfo.accountId,
              nickname: loginInfo.nickname,
              accessToken: loginInfo.accessToken,
              profileImagePath: loginInfo.profileImagePath,
              refreshToken: loginInfo.refreshToken,
            })
            this.$message({
              message: '회원가입을 성공했습니다.',
              type: 'success',
            })
            await this.$router.push('/')
            this.cancel()
          } catch (e) {
            this.$message({
              message: '회원가입을 실패했습니다.',
              type: 'error',
            })
          }
        } else {
          return false
        }
      })
    },
    cancel() {
      this.reset();
      this.dialogVisible = false
    },
    reset() {
      this.$refs.SignUpForm.resetFields()
    },

  }
}
</script>

<style>
.sign-up-dialog-form-row {
  margin-bottom: 5px;
}

.sign-up-dialog-form-row .el-form-item__content {
  margin-left: 35px !important;
  width: 400px !important;
}
</style>
