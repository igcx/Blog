<template>
  <div class="app">
    <!-- 我是根组件 --- {{msg}}
    <p>我是一个p</p>
    <hr>
    <Demo></Demo>
    <MyHeader></MyHeader> -->


    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  data () {
    return {
      msg: '123'
    }
  },
  components: {
    Demo
  }
}
</script>

<style lang="less">
.app {
  background-color: pink;
  p {
    color: green;
  }
}
</style>