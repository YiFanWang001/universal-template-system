<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        class="side"
        :style="{ width: oncollapse.flag ? '63px' : '260px' }"
      >
        <div class="sidehader">
          <img src="../../assets/logo-2.png" alt="" class="logo" />
          <span v-if="!oncollapse.flag">imooc-admin</span>
        </div>
        <el-menu
          :collapse="oncollapse.flag"
          active-text-color="#ffd04b"
          background-color="#2D3A55"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :collapse-transition="false"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>一级</span>
            </template>
            <el-sub-menu index="1-4">
              <template #title><span>二级</span></template>
              <el-menu-item index="1-4-1">三级</el-menu-item>
              <el-menu-item index="1-4-2">三级</el-menu-item>
              <el-menu-item index="1-4-3">三级</el-menu-item>
              <el-menu-item index="1-4-4">三级</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <nav>
                  <div class="sidebut">
                    <span
                      class="collapse"
                      @click="oncollapse.flag = !oncollapse.flag"
                      ><svg-icon
                        class="hamburger"
                        :iconClass="
                          oncollapse.flag
                            ? 'hamburger-closed'
                            : 'hamburger-opened'
                        "
                      ></svg-icon
                    ></span>
                    个人中心
                  </div>
                  <div>
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <el-tooltip
                      content="国际化"
                      placement="bottom"
                      effect="light"
                    >
                      <el-button class="iconarr"
                        ><i
                          ><svg-icon
                            class="icon"
                            iconClass="language"
                          ></svg-icon></i
                      ></el-button>
                    </el-tooltip>
                  </div>
                </nav>
              </div>
            </template>
            <div>
              <!--  -->
              <!--  -->
              <!--  -->
              <!--  -->
              <el-tag closable type="info"> 1 </el-tag>
            </div>
          </el-card>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { Setting } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { ref, reactive } from 'vue'
const store = useStore()
const oncollapse = reactive({
  flag: false
})

const getlist = () => {
  try {
    store.dispatch('user/getUser')
  } catch (error) {
    console.log(error)
  }
}
getlist()
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  padding: 20px 10px 5px 10px;
}
.side {
  width: '260px';
  height: 100vh;
  background-color: rgb(45, 58, 85);
}
.sidehader {
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  padding: 0 30px;
}
.el-menu {
  background-color: rgb(45, 58, 85);
  --text-color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  // min-width: 100px;
}
.logo {
  width: 40px;
  height: 40px;
}
.tag {
  float: left;
  margin-left: 10px;
}
.el-card {
  width: 100%;
}
.icon {
  width: 2em;
  height: 2em;
}
.el-header {
  padding: 0;
  border: 0;
  border-bottom: 1;
}
.hamburger {
  width: 1em;
  height: 1em;
}
.collapse {
  font-size: 30px;
}
nav {
  display: flex;
  // float: left;
  justify-content: space-between;
}
.iconarr {
  width: 30px;
  height: 30px;
}
.sidebut {
  font-size: 24px;
  display: flex;
}
</style>
