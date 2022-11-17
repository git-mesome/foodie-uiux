<template>
  <div>
    <el-dialog title="게시글 등록" :visible.sync="visibleModal" :before-close="handleClose" :modal="false">
      <el-upload action="#" list-type="picture-card"
                 :on-preview="handlePictureCardPreview"
                 :on-remove="handleRemove"
                 :http-request="addFileToFormData">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="제목" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="게시글 종류" prop="postType">
          <el-radio-group v-model="ruleForm.postType" size="medium">
            <el-radio border label="FREE">나눔</el-radio>
            <el-radio border label="EXCHANGE">교환</el-radio>
            <el-radio border label="RECIPE">레시피</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="카테고리" prop="category">
          <el-select v-model="ruleForm.category" placeholder="카테고리    ex) 야채">
            <el-option label="야채" value="야채"></el-option>
            <el-option label="육류" value="육류"></el-option>
            <el-option label="과일" value="과일"></el-option>
            <el-option label="통조림" value="통조림"></el-option>
            <el-option label="간식" value="간식"></el-option>
            <el-option label="라면" value="라면"></el-option>
            <el-option label="냉동식품" value="냉동식품"></el-option>
            <el-option label="기타" value="기타"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="내용" prop="content">
          <el-input type="textarea"  :autosize="{ minRows: 6, maxRows: 6}" placeholder="내용을 입력해주세요. ex) 유효기간, 만남 장소"
                    v-model="ruleForm.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button style="font-size: 20px" @click="handleClose">취소</el-button>
      <el-button style="font-size: 20px" type="primary" @click="confirm('ruleForm')">등록</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import FormData from 'form-data';

export default {
  data() {
    return {
      visibleModal: false,
      dialogImageUrl: '',
      dialogVisible: false,
      fileFormData: null,
      ruleForm: {
        title: '',
        content: '',
        category: '',
        postType: ''
      },
      rules: {
        title: [
          {required: true, message: '제목은 필수입니다.', trigger: 'blur'},
          {min: 3, max: 100, message: '최소 3글자 이상 써주세요', trigger: 'blur'}
        ],
        postType: [
          {required: true, message: '종류를 선택해주세요', trigger: 'change'}
        ],
        category: [
          {required: true, message: '하나의 카테고리는 필수입니다.', trigger: 'change'}
        ]
      }
    }
  },
  created() {
    this.fileFormData = new FormData();
  },
  props: {
    saveModal: {}
  },
  watch: {
    saveModal() {
      this.visibleModal = this.saveModal
    }
  },
  methods: {
    modalClose() {
      this.$emit('modalClose')
    },

    async confirm(formName) {
      const json = JSON.stringify({
        title: this.ruleForm.title,
        content: this.ruleForm.content,
        category: this.ruleForm.category,
        postType: this.ruleForm.postType
      })
      const blob = new Blob([json], {type: 'application/json'})
      this.fileFormData.append("postContents", blob);
      await this.$axios.post('/api/posts',this.fileFormData, {
        headers: {
          Authorization: 'Bearer ' + this.$store.state.auth.loginInfo.accessToken,
          'Content-Type': 'multipart/form-data'
        }
      });
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        this.modalClose()
      });
      await this.$store.dispatch('fetchPosts', this.ruleForm.postType)

    },

    handleClose(done) {
      this.$confirm('정말 닫으시겠어요? 작성한 내용은 사라집니다')
        .then(_ => {
          this.modalClose();
        })
        .catch((_ => {
        }));
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addFileToFormData(file) {
      this.fileFormData.append('imagePath', file.file);
      console.log(this.fileFormData)
      console.log(this.fileFormData.getAll('imagePath'))
    }
  }
}
</script>
<style scoped>
.el-form-item {
  margin-top: 22px;
}


</style>

