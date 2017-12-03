import * as types from './mutation-types'

// Set Actions
export const setEto = ({ commit }, eto_value) => {
  commit(types.SET_ETO, eto_value)
}

export const setDwi = ({ commit }, dwi_value) => {
  commit(types.SET_DWI, dwi_value)
}

export const setKc = ({ commit }, kc_value) => {
  commit(types.SET_KC, kc_value)
}

export const setDailyPrecipitation = ({ commit }, daily_precipitation_value) => {
  commit(types.SET_DAILY_PRECIPITATION, daily_precipitation_value)
}

export const setSystemIrrigationEfficiency = ({ commit }, system_irrigation_efficiency_value) => {
  commit(types.SET_SYSTEM_IRRIGATION_EFFICIENCY, system_irrigation_efficiency_value)
}

// Reset Actions
export const resetEto = ({ commit }) => {
  commit(types.RESET_ETO)
}