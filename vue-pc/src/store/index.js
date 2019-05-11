import Vue from 'vue'
import Vuex from 'vuex'
import area from './modules/area'
import group from './modules/group'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    area,
    group
  }
})
