import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  eto: [],
  dwi: 0,
  kc: 0
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})