<template>
  <div class="app">
    <p>123 ---{{msg}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
// 导出一个组件的配置
export default {
  data () {
    return {
      msg: '123456'
    }
  }
}
</script>

<style lang="less">
.app {
  background-color: red;
  p {
    color: yellow;
    background: url(1.jpg);
  }
}
</style>