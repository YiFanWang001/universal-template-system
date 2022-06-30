<template>
  <div>
    <el-aside>
      <div class="sidehader">
        <img src="../../assets/logo-2.png" alt="" class="logo" />
        <span v-if="!Foldflag">imooc-admin</span>
      </div>
      <el-menu
        :collapse="Foldflag"
        active-text-color="#fff"
        background-color="#2D3A55"
        class="el-menu-vertical-demo"
        text-color="#ccc"
        :collapse-transition="false"
        router
      >
        <!--  ${router.path} -->
        <SubMenu
          :data="item"
          v-for="(item, index) in list"
          :key="index"
        ></SubMenu>
      </el-menu>
    </el-aside>
    <div></div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SubMenu from './Aside/SubMenu.vue'
import { Setting } from '@element-plus/icons-vue'
import router from '@/router'
const routers = router.options.routes

const props = defineProps({
  Foldflag: Boolean
})

const list = routers.filter((item) => {
  return item.meta && item.meta.icon
})

// const data = reactive([
//   { value: '个人主页', icon: 'personnel', path: '/profile' },

//   {
//     value: '用户',
//     icon: 'personnel',
//     path: 'user',
//     children: [
//       { value: '员工管理', path: '/userManage' },
//       { value: '角色列表', path: '/roleList' },
//       { value: '权限管理', path: '/permissionList' }
//     ]
//   },
//   {
//     icon: 'article',
//     value: '文章',
//     path: 'article',
//     children: [
//       { value: '文章排名', path: '/articleRanking' },
//       { value: '创建文章', path: '/articleCreate' }
//     ]
//   }
// ])
</script>

<style lang="scss" scoped>
.sidehader {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  line-height: 50px;

  .logo {
    width: 40px;
    height: 40px;
  }
  span {
    color: #fff;
  }
}
.el-aside {
  height: 100vh;
  width: 100%;
}
</style>
