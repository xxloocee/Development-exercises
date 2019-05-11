import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 长按指令
import longpress from './lib/longPress.js'
Vue.use(longpress, { time: 500 })

import "@/assets/fonts/iconfont.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

