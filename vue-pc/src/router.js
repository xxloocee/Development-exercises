import Vue from 'vue'
import Router from 'vue-router'
import Example from './views/example.vue'
import Homepage from './views/homepage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    }
  ]
})
