'use strict'

export function etoPenMon(saturationPressureCurve, psychrometricCoefficient, radiationBalance, modifiedPsychrometricCoefficient, averageTemp, windSpeed, saturationPressure, steamPressure) {

  return (((saturationPressureCurve / (saturationPressureCurve + modifiedPsychrometricCoefficient)) * ((radiationBalance) * (1 / 2.45))) + ((psychrometricCoefficient / (saturationPressureCurve + modifiedPsychrometricCoefficient)) * (900 / (averageTemp + 273)) * (windSpeed) * (saturationPressure - steamPressure)))

}