<template>
  <div class="bj">
    <div class="biaodan">
      <el-form :model="form">
        <div class="top">
          <h2 style="color: white; width: 200px">用户登录</h2>
          <span class="kg">icon</span>
        </div>
        <el-form-item>
          <el-input></el-input>
        </el-form-item>

        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="dl"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bj {
  position: relative;
  background-color: #2d3a4b;
  height: 100%;
}
.biaodan {
  width: 520px;
  height: 400px;
  // background: rgb(208, 209, 149);
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 20px 20px;
}
::v-deep .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

::v-deep .el-input {
  // display: inline-block;
  height: 47px;
  width: 85%;
  .el-input__wrapper {
    background: transparent;
    box-shadow: none;
  }
  input {
    background: transparent;
    border: none;
    // background: rgba(0, 0, 0, 0.1);
    // background-color: rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    // color: #eee;
    height: 47px;
    // caret-color:#fff;
  }
}
.dl {
  width: 100%;
}
.top {
  width: 100%;
  height: 47px;
  color: white;
  // line-height: 47px;
}
</style>
