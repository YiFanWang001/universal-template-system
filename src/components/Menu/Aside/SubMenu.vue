<template>
  <!-- <div>
    {{ data }}
  </div> -->

  <el-sub-menu
    v-if="data.children && data.children.length > 0"
    :index="data.path"
  >
    <template #title>
      <el-icon v-if="data.meta.icon">
        <svg-icon class="icon" :iconClass="data.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ data.meta.title }}</span>
    </template>
    <SubMenu :data="item" v-for="(item, index) in list" :key="index"></SubMenu>
  </el-sub-menu>

  <el-menu-item :index="data.path" v-else>
    <template>
      <el-icon v-if="data.meta.icon">
        <svg-icon class="icon" :iconClass="data.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ data.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SubMenu from './SubMenu.vue'
import { Setting } from '@element-plus/icons-vue'
import { setItem, getItem, removeItem } from '@/utils/storage'
const props = defineProps({
  data: Object,
  default: () => {}
})
const jurisdiction = getItem('getItem')
const date = props.data.children
let list = null
const getlist = () => {
  if (date) {
    list = date.filter((item) => {
      return item.meta && item.meta.icon
    })
  }
}
getlist()
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
