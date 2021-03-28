import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 关闭控制台的提示消息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
