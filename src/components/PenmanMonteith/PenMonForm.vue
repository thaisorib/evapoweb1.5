<template>
  <div id="penmon-form" class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content">
          <span class="card-title">{{ methodTitle }}</span>
          <p class="method-description">
            {{ methodDescription }}
          </p>
          <br>
          <div class="row">
            <div class="col m4">
              <label>Dia:</label>
              <select class="browser-default" v-model.number="day">
                <option disabled selected>Escolha um dia</option>
                <option :value="day" v-for="day in DAYS" :key="day">{{ day }}</option>
              </select>
              <span class="error-message" v-if="$v.day.$invalid">Entre com o valor dia desejado</span>
            </div>
            <div class="col m4">
              <label>Mês:</label>
              <select class="browser-default" v-model.number="month">
                <option disabled selected>Escolha um mês</option>
                <option :value="month.index" v-for="month in MONTHS" :key="month.index">{{ month.month }}</option>
              </select>
              <span class="error-message" v-if="$v.month.$invalid">Entre com o valor do mês desejado</span>
            </div>
            <div class="col m4">
              <label>Ano:</label>
              <select class="browser-default" v-model.number="year">
                <option disabled selected>Escolha um ano</option>
                <option :value="year" v-for="year in YEARS" :key="year">{{ year }}</option>
              </select>
              <span class="error-message" v-if="$v.year.$invalid">Entre com o valor do ano desejado</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="temperature9AM" type="text" class="validate" v-model.number="temp9AM" @input="$v.temp9AM.$touch()">
              <label for="temperature9AM">Temperatura: (9 horas)</label>
              <span class="error-message" v-if="!$v.temp9AM.required">Entre com o valor da temperatura às 9 horas</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="temperature121PM" type="text" class="validate" v-model.number="temp21PM" @input="$v.temp21PM.$touch()">
              <label for="temperature15PM">Temperatura: (21 horas)</label>
              <span class="error-message" v-if="!$v.temp21PM.required">Entre com o valor da temperatura às 21 horas</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="temp-max" type="text" class="validate" v-model.number="tempMax" @input="$v.tempMax.$touch()">
              <label for="temp-max">Temperatura Máxima: (ºC)</label>
              <i class="mi mi-face"></i>
              <span class="error-message" v-if="!$v.tempMax.required">Entre com o valor da temperatura máxima</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="temp-min" type="text" class="validate" v-model.number="tempMin" @input="$v.tempMin.$touch()">
              <label for="temp-min">Temperatura Mínima: (ºC)</label>
              <i class="mi mi-face"></i>
              <span class="error-message" v-if="!$v.tempMin.required">Entre com o valor da temperatura mínima</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="atmosphericPressure" type="text" class="validate" v-model.number="atmosphericPressure" @input="$v.atmosphericPressure.$touch()">
              <label for="atmosphericPressure">Pressão atmosférica: (kPa)</label>
              <p class="error-message" v-if="!$v.atmosphericPressure.required">Este campo é obrigatório</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="wind-speed" type="text" class="validate" v-model.number="windSpeed" @input="$v.windSpeed.$touch()">
              <label for="wind-speed">Velocidade do vento média a 10 metros: (m/s)</label>
              <span class="error-message" v-if="!$v.windSpeed.required">Entre com a velocidade do vento média a 10 metros</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="umidade-relativa-9AM" type="text" class="validate" v-model.number="umiRelativa9AM" @input="$v.umiRelativa9AM.$touch()">
              <label for="umidade-relativa-9AM">Umidade Relativa média diária: (9h)</label>
              <span class="error-message" v-if="!$v.umiRelativa9AM.required">Entre com o valor da Umidade Relativa as 9h</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="umidade-relative-15PM" type="text" class="validate" v-model.number="umiRelativa15PM" @input="$v.umiRelativa15PM.$touch()">
              <label for="umidade-relative-15PM">Umidade Relativa média diária: (15h)</label>
              <span class="error-message" v-if="!$v.umiRelativa15PM.required">Entre com o valor da Umidade Relativa as 15h</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="umidade-relativa-21PM" type="text" class="validate" v-model.number="umiRelativa21PM" @input="$v.umiRelativa21PM.$touch()">
              <label for="umidade-relativa-21PM">Umidade Relativa média diária: (21h)</label>
              <span class="error-message" v-if="!$v.umiRelativa21PM.required">Entre com o valor da Umidade Relativa as 21h</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="insolation" type="text" class="validate" v-model.number="insolation" @input="$v.insolation.$touch()">
              <label for="insolation">Insolação: (horas)</label>
              <p class="error-message" v-if="!$v.insolation.required">Este campo é obrigatório</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m4 s6">
              <input id="latitude-graus" type="text" class="validate" v-model.number="latitudeGraus" @input="$v.latitudeGraus.$touch()">
              <label for="latitude-graus">Latitude em graus:</label>
              <span class="error-message" v-if="!$v.latitudeGraus.required">Entre com o valor da latitude em graus</span>
            </div>
            <div class="input-field col m4 s6">
              <input id="latitude-minutos" type="text" class="validate" v-model.number="latitudeMinutos" @input="$v.latitudeMinutos.$touch()">
              <label for="latitude-minutos">Latitude em minutos:</label>
              <span class="error-message" v-if="!$v.latitudeMinutos.required">Entre com o valor da latitude em minutos</span>
            </div>
          </div>
          <div class="row" v-if="result">
            <div class="col m8 s12 offset-m2">
              <p class="result">{{ result }} mm/dia</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <button class="waves-effect waves-light btn" @click="calculate()">Calcular</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DAYS from '../../assets/days'
import MONTHS from '../../assets/months'
import YEARS from '../../assets/years'
import { julianDay } from '@/functions/julianDay.js'
import { windSpeed } from '@/functions/windSpeed.js'
import { latitude } from '@/functions/latitudeHarSam.js'
import { averageTemp } from '@/functions/averageTemp.js'
import { saturationPressure } from '@/functions/saturationPressure.js'
import { saturationPressureCurve } from '@/functions/saturationPressureCurve.js'
import { psychrometricCoefficient } from '@/functions/psychrometricCoefficient.js'
import { modifiedPsychrometricCoefficient } from '@/functions/modifiedPsychrometricCoefficient.js'
import { relativeHumidity } from '@/functions/relativeHumidity.js'
import { steamPressure } from '@/functions/steamPressure.js'
import { solarDeclination } from '@/functions/solarDeclination.js'
import { sunriseAngle } from '@/functions/sunriseAngle.js'
import { durationDay } from '@/functions/durationDay.js'
import { relativeEarthSun } from '@/functions/relativeEarthSun.js'
import { radiationAtmosphere } from '@/functions/radiationAtmosphere.js'
import { incidentSolarRadiationPM } from '@/functions/incidentSolarRadiationPM.js'
import { shortwaveRadiation } from '@/functions/shortwaveRadiation.js'
import { longwaveRadiation } from '@/functions/longwaveRadiation.js'
import { radiationBalance } from '@/functions/radiationBalance.js'
import { etoPenMon } from '@/functions/etoPenMon.js'
import { required, numeric, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      DAYS: DAYS,
      MONTHS: MONTHS,
      YEARS: YEARS,
      result: 0,
      methodTitle: "Método Penman-Monteith (FAO-56)",
      methodDescription:
        "O método de Penman-Monteith foi recomendado pela FAO como o mais adequado para estimar a evapotranspiração de referência (ETo) de uma cultura em escala diária.",
      day: '',
      month: '',
      year: '',
      temp9AM: '',
      temp21PM: '',
      tempMax: '',
      tempMin: '',
      windSpeed: '',
      atmosphericPressure: '',
      umiRelativa9AM: '',
      umiRelativa15PM: '',
      umiRelativa21PM: '',
      insolation: '',
      latitudeGraus: '',
      latitudeMinutos: ''
    }
  },

  validations: {
    day: {
      required
    },
    month: {
      required
    },
    year: {
      required
    },
    temp9AM: {
      required
    },
    temp15PM: {
      required
    },
    temp21PM: {
      required
    },
    tempMax: {
      required
    },
    tempMin: {
      required
    },
    windSpeed: {
      required
    },
    umiRelativa9AM: {
      required
    },
    umiRelativa15PM: {
      required
    },
    umiRelativa21PM: {
      required
    },
    latitudeGraus: {
      required
    },
    latitudeMinutos: {
      required
    },
    insolation: {
      required
    },
    atmosphericPressure: {
      required
    }
  },

  methods: {
    calculate() {
      let julianDayResult = julianDay(this.day, this.month, this.year)
      let windSpeedResult = windSpeed(this.windSpeed)
      let averageTempResult = averageTemp(this.temp9AM, this.temp21PM, this.tempMax, this.tempMin)
      let saturationPressureResult = saturationPressure(averageTempResult)
      let saturationPressureCurveResult = saturationPressureCurve(saturationPressureResult, averageTempResult)
      let psychrometricCoefficientResult = psychrometricCoefficient(this.atmosphericPressure)
      let modifiedPsychrometricCoefficientResult = modifiedPsychrometricCoefficient(psychrometricCoefficientResult, windSpeedResult)
      let relativeHumidityResult = relativeHumidity(this.umiRelativa9AM, this.umiRelativa15PM, this.umiRelativa21PM)
      let steamPressureResult = steamPressure(saturationPressureResult, relativeHumidityResult)
      let solarDeclinationResult = solarDeclination(julianDayResult)
      let latitudeResult = latitude(this.latitudeGraus, this.latitudeMinutos)
      let sunriseAngleResult = sunriseAngle(latitudeResult, solarDeclinationResult)
      let durationDayResult = durationDay(sunriseAngleResult)
      let relativeEarthSunResult = relativeEarthSun(julianDayResult)
      let radiationAtmosphereResult = radiationAtmosphere(relativeEarthSunResult, latitudeResult, solarDeclinationResult, sunriseAngleResult)
      let incidentSolarRadiationResult = incidentSolarRadiationPM(this.insolation, durationDayResult, radiationAtmosphereResult)
      let shortwaveRadiationResult = shortwaveRadiation(incidentSolarRadiationResult)
      let longwaveRadiationResult = longwaveRadiation(this.insolation, durationDayResult, steamPressureResult, this.tempMax, this.tempMin)
      let radiationBalanceResult = radiationBalance(shortwaveRadiationResult, longwaveRadiationResult)

      let etoResult = etoPenMon(saturationPressureCurveResult, psychrometricCoefficientResult, radiationBalanceResult, modifiedPsychrometricCoefficientResult, averageTempResult, windSpeedResult, saturationPressureResult, steamPressureResult)
      this.result = etoResult.toFixed(2)
      this.$store.dispatch('setEto', this.result)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


