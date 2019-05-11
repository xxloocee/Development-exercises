import * as types from '../mutation-types'

const state = {
  group: [],
  groupTypes: [],
  activeType: {},
  unit: {}
}

const getters = {
  group: state => state.group
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
