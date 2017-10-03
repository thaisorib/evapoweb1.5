'use strict'

export function wetBulbTemp(wetBulb9AM, wetBulb15PM, wetBulb21PM) {
  let wetBulbTemp

  wetBulbTemp = ((wetBulb9AM + wetBulb15PM + (2 * wetBulb21PM)) / 4);

  return wetBulbTemp
}