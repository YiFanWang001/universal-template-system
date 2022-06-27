<template>
  <div id="app">
    <div class="form">
      <header>
        <h3>登录用户</h3>

        <span class="icon">
          <el-tooltip content="国际化" placement="bottom" effect="light">
            <el-button class="cn">
              <svg-icon class="language" iconClass="language"></svg-icon
            ></el-button>
          </el-tooltip>
        </span>
      </header>
      <el-form :model="loginform" :rules="rules">
        <el-form-item prop="username">
          <el-input type="text" v-model="loginform.username">
            <template #prefix>
              <!-- <el-icon class="el-input__icon"><Avatar /></el-icon> -->
              <svg-icon class="formicon" iconClass="user"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginform.password"
            :type="passwordType == 'password' ? 'password' : 'text'"
          >
            <template #prefix>
              <!-- <el-icon class="el-input__icon"><Lock /></el-icon> -->
              <svg-icon class="formicon" iconClass="password"></svg-icon>
            </template>
            <template #suffix>
              <svg-icon
                class="formicon"
                @click="onChangePwdType"
                :iconClass="passwordType == 'password' ? 'eye' : 'eye-open'"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(loginform)"
            class="login_button"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import deepCopy from '../../utils/deepCopy'
import { reactive, ref, unref, h } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { Avatar, Lock } from '@element-plus/icons-vue'
import MD5 from 'md5'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const loginform = reactive({
  username: 'super-admin',
  password: '123456'
})
const loding = reactive({
  data: false
})

const submitForm = async () => {
  try {
    loding.data = true
    const fromLogin = deepCopy.deepCopy(loginform)
    fromLogin.password = MD5(fromLogin.password)
    store.dispatch('user/login', fromLogin)
  } catch (error) {
    console.log(error)
  }
  loding.data = false
}
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const passwordType = ref('password')
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
}
.form {
  width: 520px;
  height: 400px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.language {
  width: 1em;
  height: 1em;
  margin: 0 auto;
}
.el-input {
  width: 100%;
  height: 47px;
  box-shadow: none;
}
::v-deep .el-input__inner {
  color: #eee;
}
::v-deep .el-input__wrapper {
  box-shadow: none;
  background: transparent;
  background-color: none;
}

h3 {
  width: 100%;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.login_button {
  width: 100%;
}
header {
  position: relative;
}
.cn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 30px;
  // background-color: #fff;
  border-radius: 5px;
}
.el-icon {
  font-size: 20px;
}
::v-deep .el-form-item {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: transparent;
}
.formicon {
  width: 1em;
  height: 1em;
}
.el-input__inner {
  border: 0;
}
::v-deep .el-form-item.is-error .el-input__wrapper {
  box-shadow: none;
}
</style>
