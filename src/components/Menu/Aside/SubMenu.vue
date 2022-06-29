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
    <SubMenu
      :data="item"
      v-for="(item, index) in data.children"
      :key="index"
    ></SubMenu>
  </el-sub-menu>

  <slot v-else>
    <el-menu-item :index="data.path" v-if="data.meta.icon">
      <el-icon v-if="data.meta.icon">
        <svg-icon class="icon" :iconClass="data.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ data.meta.title }}</span>
    </el-menu-item>
  </slot>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SubMenu from './SubMenu.vue'
import { Setting } from '@element-plus/icons-vue'
const props = defineProps({
  data: Object
})
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
