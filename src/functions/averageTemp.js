'use strict'

export function averageTemp(temperatureAM, temperaturePM, tempMax, tempMin) {
  let averageTemp

  averageTemp = ((temperatureAM + tempMax + tempMin + (2 * temperaturePM)) / 5)

  return averageTemp
}