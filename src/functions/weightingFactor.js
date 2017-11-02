'use strict'

export function weightingFactor(wetBulbTemp) {
  if ((wetBulbTemp > 0) && (wetBulbTemp < 16)) {
    return (0.407 + 0.0145 * tempMewetBulbTempdiaBuldo);
  }
  return (0.483 + 0.01 * wetBulbTemp);
}