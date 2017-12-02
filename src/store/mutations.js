import * as types from './mutation-types'

export const mutations = {
  [types.SET_ETO] (state, eto_value) {
    state.eto = eto_value
  },

  [types.SET_DWI](state, dwi_value) {
    state.dwi = dwi_value
  },

  [types.SET_KC](state, kc_value) {
    state.kc = kc_value
  },

  [types.RESET_ETO] (state) {
    state.eto = []
  }
}