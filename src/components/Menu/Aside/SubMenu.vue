<template>
  <slot v-for="(item, index) in data" :key="index">
    <el-sub-menu v-if="item.children" :index="item.id">
      <template #title>
        <el-icon
          ><svg-icon class="icon" :iconClass="item.icon"></svg-icon
        ></el-icon>
        <span>{{ item.value }}</span>
      </template>
      <SubMenu :data="item.children" v-if="item.children"></SubMenu>
    </el-sub-menu>
    <el-menu-item :index="item.id" v-else>
      <el-icon>
        <svg-icon class="icon" :iconClass="item.icon"></svg-icon>
      </el-icon>
      <span>{{ item.value }}</span></el-menu-item
    >
  </slot>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SubMenu from './SubMenu.vue'
import { Setting } from '@element-plus/icons-vue'
const props = defineProps({
  data: Array
})

console.log(props.data)
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
