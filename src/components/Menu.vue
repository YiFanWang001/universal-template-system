<template>
  <div id="app">
    <div class="left" :style="{ width: data.Foldflag ? '63px' : '260px' }">
      <Aside :Foldflag="data.Foldflag" class="aside"> </Aside>
    </div>
    <div class="right">
      <Header
        class="header"
        :Foldflag="data.Foldflag"
        @reversal="reversal"
      ></Header>
      <Main class="main"></Main>
    </div>
  </div>
</template>

<script setup>
import Aside from './Menu/Aside.vue'
import Header from './Menu/Header.vue'
import Main from './Menu/Main.vue'

import { reactive, ref } from 'vue'
const data = reactive({
  Foldflag: false
})
const reversal = () => {
  data.Foldflag = !data.Foldflag
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
}
.aside {
  background-color: #2d3a55;
  overflow-y: auto;
}
.main {
  overflow-y: auto;
  width: 100%;
  flex: 1;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.left {
  width: 260px;
}
</style>
