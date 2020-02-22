<template>
  <el-form :rules="rules" class="login-container" label-position="left" :model="registerForm"
           label-width="0px" v-loading="loading">
    <h3 class="login_title">用户注册</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="registerForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="registerForm.password"
                auto-complete="off" placeholder="密码（请输入6-20位字符）"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="registerForm.checkPass"
                auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item prop="authorization">
      <el-input v-model="registerForm.authorization"
                auto-complete="off" placeholder="学校授权码（例如：广东金融学院为GDJRXY）"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%; text-align: center">
      <el-button type="primary" style="width: 100%" @click="submitClick(registerForm)" >注册</el-button>
      <el-button style="width: 40%; margin: 5px" @click="resetForm">重置</el-button>
      <el-button style="width: 40%; margin: 5px" @click="returnLogin">返回登录页面</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default{
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}, { min: 6, max: 20, message: '请输入6-20位字符', trigger: 'blur' }, { validator: validatePass, trigger: 'blur' }],
          checkPass: [{ required: true, message: '请再次输入密码', trigger: 'blur' }, { validator: validatePass2, trigger: 'blur', required: true }],
          authorization: [{required: true, message: '请输入授权码', trigger: 'blur'}]
        },
        checked: true,
        registerForm: {
          username: '',
          password: '',
          checkPass:'',
          authorization:''
        },
        loading: false
      }
    },
    methods: {
      submitClick() {
        var _this = this;
        this.loading = true;
        this.postRequest('/register/register', {
          username: this.registerForm.username,
          password: this.registerForm.password,
          authorization: this.registerForm.authorization
        }).then(resp=> {
          _this.loading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            var path = _this.$route.query.redirect;
            _this.$router
              .replace({path: path == '/' || path == undefined ? '/' : path});
          }
        });
      },
      resetForm() {
        this.registerForm = {
          username: '',
          password: '',
          checkPass:'',
          authorization:''
        }
      },
      returnLogin() {
        this.$router.push({path: '/login'});
      }
    }
  }
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
