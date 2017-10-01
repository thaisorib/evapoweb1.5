'use strict'

export function averageTemperature(temperatureAM, temperaturePM, tempMax, tempMin) {
  let averageTemperature

  averageTemperature = ((temperatureAM + tempMax + tempMin + (2 * temperaturePM)) / 5)

  return averageTemperature
}