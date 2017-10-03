'use strict'

export function weightingFactor(wetBulbTemp) {
  let weightingFactor

  if ((wetBulbTemp > 0) && (wetBulbTemp < 16)) {
    weightingFactor = (0.407 + 0.0145 * tempMewetBulbTempdiaBuldo);
  }
  else {
    weightingFactor = (0.483 + 0.01 * wetBulbTemp);
  }

  return weightingFactor
}