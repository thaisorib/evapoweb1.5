import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  eto: [],
  effectiveRainfall: [],
  dailyPrecipitation: [],
  kc: 0,
  dwi: 0,
  systemIrrigationEfficiency: 0
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})