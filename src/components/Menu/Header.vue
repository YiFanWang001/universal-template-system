<template>
  <div id="app">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <nav>
            <div class="sidebut">
              <span class="collapse" @click="reversal"
                ><svg-icon
                  class="hamburger"
                  :iconClass="
                    Foldflag ? 'hamburger-closed' : 'hamburger-opened'
                  "
                ></svg-icon
              ></span>
              个人中心
            </div>
          </nav>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const emit = defineEmits(['reversal'])
const props = defineProps({
  Foldflag: Boolean
})
const reversal = () => {
  emit('reversal')
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: auto;
  padding: 0 0 30px 0;
}
.hamburger {
  width: 1em;
  height: 1em;
}
.el-card {
  width: 100%;
}
.collapse {
  font-size: 30px;
}
.sidebut {
  font-size: 24px;
  display: flex;
}
</style>
