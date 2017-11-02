'use strict'

export function etoMakkink(weightingFactor, incidentSolarRadiation) {

  return ((0.61 * weightingFactor * (incidentSolarRadiation / 2.45)) - 0.12)
}