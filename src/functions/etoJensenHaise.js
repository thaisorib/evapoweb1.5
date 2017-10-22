'use strict'

export function etoJensenHaise(incidentSolarRadiation, tempMedia) {
  let etoJensenHaise

  etoJensenHaise = ((incidentSolarRadiation / 2.45) * ((0.0252 * tempMedia) + 0.078));

  return etoJensenHaise
}