'use strict'

export function relativeHumidity(umiRelativa9AM, umiRelativa15PM, umiRelativa21PM) {

  return ((umiRelativa9AM + umiRelativa15PM + (2 * umiRelativa21PM)) / 4)
}