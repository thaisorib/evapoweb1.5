'use strict'

export function psychrometricCoefficient(atmosphericPressure) {
  let psychrometricCoefficient

  psychrometricCoefficient = (0.0016286 * (pAtm / 2.45));

  return psychrometricCoefficient
}