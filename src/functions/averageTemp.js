'use strict'

export function averageTemp(temperatureAM, temperaturePM, tempMax, tempMin) {

  return ((temperatureAM + tempMax + tempMin + (2 * temperaturePM)) / 5)
}