<template>
  <div>
    <el-dropdown trigger="click">
      <el-button type="primary">
        <el-avatar shape="square" :size="40" :src="data.avatar" />
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>课程主页</el-dropdown-item>
          <el-dropdown-item divided @click="out">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { removeAllItem } from '@/utils/storage'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const { data } = store.getters.userInfo

const out = () => {
  router.push('/login')
  store.dispatch('user/logout')
  removeAllItem()
}
</script>

<style lang="scss" scoped>
.el-button {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0;
  padding: 0;
}
.el-avatar {
  background-color: transparent;
}
</style>
