import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 全局注册
import HmHeader from './components/MyHeader.vue'
Vue.component('MyHeader', MyHeader)

const vm = new Vue({
  el: '#app',
  // 渲染App.vue作为根组件
  // render: function (createElement) {
  //   return createElement(App)
  // }
  render: c => c(App),
  router
})