<template>
  <div id="app">
    <Menu></Menu>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const getlist = async () => {
  try {
    await store.dispatch('user/userlist')
  } catch (error) {
    console.log(error)
  }
}
getlist()
</script>

<style lang="scss" scoped></style>
