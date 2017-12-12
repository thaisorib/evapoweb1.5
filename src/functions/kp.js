'use strict'

export function kp(fetch, dailyHumidity, windSpeed) {

  return (0.108 - (0.0285984 * windSpeed) + (0.0422 * Math.log(fetch) +
    (0.1434 * Math.log(dailyHumidity)) - (0.000631 * (Math.pow(Math.log(fetch)), 2) * Math.log(dailyHumidity))))
}
