// 引入vue模块
import Vue from 'vue'
import App from './App.vue'
Vue.component('demo', Demo)
const vm = new Vue({
  // 会直接创建一个App.vue作为根组件
  // 如何把app.vue渲染成为根组件
  // render: function (createElement) {
  //   return createElement(App)
  // },
  // 把App渲染为根组件
  el: '#app',
  render: c => c(App)
})