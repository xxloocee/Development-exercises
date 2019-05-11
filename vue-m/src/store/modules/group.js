import * as types from '../mutation-types'

const state = {
  group: [{text:'11'},{text:'22'}],
  groupTypes: ['11','222'],
  activeType: {},
  unit: {}
}

const getters = {
  group: state => state.group,
}

const actions = {
  getGroup ({ commit }, data) {
    commit(types.GET_GROUP, data)
  }
}

const mutations = {
  [types.GET_GROUP] (state, group) {
    state.group = group
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
