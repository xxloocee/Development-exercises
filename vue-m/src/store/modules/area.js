// import * as types from '../mutation-types'
import api from '@/api/index'
const state = {
  allNumber: 0,
  crfcode: '', // csrf token
  collection: '' // 公钥
}

const getters = {
  allNumber: state => state.allNumber,
  crfcode: state => state.crfcode,
  collection: state => state.collection
}

const actions = {
  getAllNum: ({ commit }, data) => commit('getAllNum', data),
  getLogin({ commit }, data) { // 登录函数
    api.getDistrict(data).then(json => {
      console.log(json)
    })
  },
  AgetCrf({ commit }, inner) { // 获取token
    api.getCsrf().then(json => {
      commit('getCrf', json.data.result)
    })
  },
  AgetCollection({ commit }, inner) { // 获取公钥
    api.getColle().then(json => {
      commit('getCollection', json.data.result)
    })
  }
}

const mutations = {
  getAllNum(state, inner) {
    console.log(inner);
  },
  getCrf(state, inner) {
    state.crfcode = ''
    state.crfcode = inner
    console.log(inner)
  },
  getPasWord(state, inner) {
    return inner
  },
  getCollection(state, inner) {
    state.collection = ''
    state.collection = inner
    console.log(inner)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
