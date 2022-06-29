<template>
  <div>
    <el-aside>
      <div class="sidehader">
        <img src="../../assets/logo-2.png" alt="" class="logo" />
        <span v-if="!Foldflag">imooc-admin</span>
      </div>
      <el-menu
        :collapse="Foldflag"
        active-text-color="#ffd04b"
        background-color="#2D3A55"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :collapse-transition="false"
      >
        <SubMenu :data="data"></SubMenu>
      </el-menu>
    </el-aside>
    <div></div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SubMenu from './Aside/SubMenu.vue'
import { Setting } from '@element-plus/icons-vue'
const props = defineProps({
  Foldflag: Boolean
})
const data = reactive([
  { id: '1', value: '个人主页', icon: 'personnel' },
  { id: '4', value: '数据可视化', icon: 'international' },
  {
    id: '2',
    value: '用户',
    icon: 'personnel',
    children: [
      { id: '21', value: '员工管理' },
      { id: '22', value: '角色列表' },
      { id: '23', value: '权限管理' }
    ]
  },
  {
    id: '3',
    icon: 'article',
    value: '文章',
    children: [
      { id: '31', value: '文章排名' },
      { id: '32', value: '创建文章' }
    ]
  }
])
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
