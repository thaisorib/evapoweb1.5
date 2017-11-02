'use strict'

export function modifiedPsychrometricCoefficient(psychrometricCoefficient, windSped) {

  return (psychrometricCoefficient * (1 + (0.33 * windSped)))
}