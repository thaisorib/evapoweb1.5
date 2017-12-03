import * as types from './mutation-types'

export const mutations = {
  [types.SET_ETO] (state, eto_value) {
    state.eto.push(eto_value)
  },

  [types.SET_DWI] (state, dwi_value) {
    state.dwi = dwi_value
  },

  [types.SET_KC] (state, kc_value) {
    state.kc = kc_value
  },

  [types.SET_DAILY_PRECIPITATION] (state, daily_precipitation_value) {
    state.dailyPrecipitation.push(daily_precipitation_value)
  },

  [types.SET_SYSTEM_IRRIGATION_EFFICIENCY](state, system_irrigation_efficiency_value) {
    state.systemIrrigationEfficiency = system_irrigation_efficiency_value
  },

  [types.RESET_ETO] (state) {
    state.eto = []
  }
}