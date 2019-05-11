import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

let apiCrfCod = Vue.axios.create({
  method: 'GET',
  baseURL: '/apis/'
})

let apiCollection = Vue.axios.create({
  method: 'GET',
  baseURL: '/apis/'
})

let apiResource = Vue.axios.create({
  method: 'POST',
  baseURL: '/apis/'
})

export default {
  getDistrict: (opts) => {
    console.log(opts)
    return apiResource({url: 'login?', params: { ...opts }})
  },
  getCsrf: (opts) => {
    return apiCrfCod({url: 'service/rest/fw.System/collection/csrf?', params: { ...opts }})
  },
  getColle: (opts) => {
    return apiCollection({url: 'service/rest/fw.System/collection/key?', params: { ...opts }})
  },
  getGroup: (opts) => {
    return apiResource({url: 'mapdata?', params: { ...opts }})
  },
  getGroupTypes: (opts) => {
    return apiResource({url: 'mapgrouptype', params: { ...opts }})
  },
  getLocation: (opts) => {
    return apiResource({url: 'orgnearby?', params: { ...opts }})
  }
}
