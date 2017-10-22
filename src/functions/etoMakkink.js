'use strict'

export function etoMakkink(weightingFactor, incidentSolarRadiation) {
  let etoMakkink

  etoMakkink = ((0.61 * weightingFactor * (incidentSolarRadiation / 2.45)) - 0.12)

  return etoMakkink
}