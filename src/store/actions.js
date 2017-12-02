import * as types from './mutation-types'

export const setEto = ({ commit }, eto_value) => {
  commit(types.SET_ETO, eto_value)
}

export const setDwi = ({ commit }, dwi_value) => {
  commit(types.SET_DWI, dwi_value)
}

export const setKc = ({ commit }, kc_value) => {
  commit(types.SET_KC, kc_value)
}

export const resetEto = ({ commit }) => {
  commit(types.RESET_ETO)
}