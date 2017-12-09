'use strict'

export function saturationPressure(averageTemp) {
  return (0.6108 * (Math.exp(((7.5 * averageTemp) / (237.3 + averageTemp)))));
}