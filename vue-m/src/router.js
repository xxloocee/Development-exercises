import Vue from 'vue'
import Router from 'vue-router'
import Example from './views/example.vue'
import Home from './views/homepage.vue'
import Shopping from './views/shopping.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'homepage',
      component: Home
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }
  ],
  mode: 'history'
})
