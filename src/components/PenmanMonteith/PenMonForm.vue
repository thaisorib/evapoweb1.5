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
              <span class="error-message" v-if="$v.day.$invalid">Entre com o dia desejado</span>
            </div>
            <div class="col m4">
              <label>Mês:</label>
              <select class="browser-default" v-model.number="month">
                <option disabled selected>Escolha um mês</option>
                <option :value="month.index" v-for="month in MONTHS" :key="month.index">{{ month.month }}</option>
              </select>
              <span class="error-message" v-if="$v.month.$invalid">Entre com o mês desejado</span>
            </div>
            <div class="col m4">
              <label>Ano:</label>
              <select class="browser-default" v-model.number="year">
                <option disabled selected>Escolha um ano</option>
                <option :value="year" v-for="year in YEARS" :key="year">{{ year }}</option>
              </select>
              <span class="error-message" v-if="$v.year.$invalid">Entre com o ano desejado</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="max-temperature" type="text" class="validate" v-model.number="maxTemp" @input="$v.maxTemp.$touch()">
              <label for="max-temperature">Temperatura Máxima: (°C)</label>
              <span class="error-message" v-if="!$v.maxTemp.required">Entre com a temperatura máxima do ar (°C). O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="min-temperature" type="text" class="validate" v-model.number="minTemp" @input="$v.minTemp.$touch()">
              <label for="min-temperature">Temperatura Mínima: (°C)</label>
              <span class="error-message" v-if="!$v.minTemp.required">Entre com a temperatura mínima do ar (°C). O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="average-temperature" type="text" class="validate" v-model.number="averageTemperature" @input="$v.averageTemperature.$touch()">
              <label for="average-temperature">Temperatura Média: (°C)</label>
              <span class="error-message" v-if="!$v.averageTemperature.required">Entre com a temperatura média do ar (°C). O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="atmosphericPressure" type="text" class="validate" v-model.number="atmosphericPressure" @input="$v.atmosphericPressure.$touch()">
              <label for="atmosphericPressure">Pressão atmosférica média: (kPa)</label>
              <p class="error-message" v-if="!$v.atmosphericPressure.required">Este campo é obrigatório. O separador decimal deve ser ponto e não vírgula!</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="wind-speed" type="text" class="validate" v-model.number="windSpeed" @input="$v.windSpeed.$touch()">
              <label for="wind-speed">Velocidade do vento média a 10 metros: (m/s)</label>
              <span class="error-message" v-if="!$v.windSpeed.required">Entre com a velocidade do vento média a 10 metros. O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="umidade-relativa-media" type="text" class="validate" v-model.number="umiRelativaMedia" @input="$v.umiRelativaMedia.$touch()">
              <label for="umidade-relativa-media">Umidade Relativa Média:</label>
              <span class="error-message" v-if="!$v.umiRelativaMedia.required">Entre com o valor da Umidade Relativa média do ar. O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="insolation" type="text" class="validate" v-model.number="insolation" @input="$v.insolation.$touch()">
              <label for="insolation">Insolação: (horas)</label>
              <p class="error-message" v-if="!$v.insolation.required">Este campo é obrigatório. O separador decimal deve ser ponto e não vírgula!</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m4 s6">
              <input id="latitude-graus" type="text" class="validate" v-model.number="latitudeGraus" @input="$v.latitudeGraus.$touch()">
              <label for="latitude-graus">Latitude em graus:</label>
              <span class="error-message" v-if="!$v.latitudeGraus.required">Entre com o valor da latitude (graus). ATENÇÃO: Latitude negativa no Hemisfério Sul (-) e positiva no Hemisfério Norte (+).</span>
            </div>
            <div class="input-field col m4 s6">
              <input id="latitude-minutos" type="text" class="validate" v-model.number="latitudeMinutos" @input="$v.latitudeMinutos.$touch()">
              <label for="latitude-minutos">Latitude em minutos:</label>
              <span class="error-message" v-if="!$v.latitudeMinutos.required">Entre com o valor da latitude (minutos)</span>
            </div>
          </div>
          <div class="row" v-if="result">
            <div class="col m8 s12 offset-m2">
              <p class="result">{{ result }} mm/dia</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <button class="waves-effect waves-light btn" :class="{ disabled: isDisabled }" @click="calculate()">Calcular</button>
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
        "Atualmente o método considerado padrão para se estimar a ETo é o de Penman-Monteith parametrizado pela FAO.",
      day: '',
      month: '',
      year: '',
      averageTemperature: '',
      maxTemp: '',
      minTemp: '',
      windSpeed: '',
      atmosphericPressure: '',
      umiRelativaMedia: '',
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
    averageTemperature: {
      required
    },
    windSpeed: {
      required
    },
    umiRelativaMedia: {
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
    },
    maxTemp: {
      required
    },
    minTemp: {
      required
    }
  },

  computed: {
    isDisabled() {
      return this.latitudeMinutos === ''
    }
  },

  methods: {
    calculate() {
      console.log('this.averageTemperature:', this.averageTemperature)
      console.log('this.umiRelativaMedia:', this.umiRelativaMedia)
      let julianDayResult = julianDay(this.day, this.month, this.year)
      console.log('julianDayResult:', julianDayResult)
      let windSpeedResult = windSpeed(this.windSpeed)
      console.log('windSpeedResult:', windSpeedResult)
      let saturationPressureResult = saturationPressure(this.averageTemperature)
      console.log('saturationPressureResult:', saturationPressureResult)
      let saturationPressureCurveResult = saturationPressureCurve(saturationPressureResult, this.averageTemperature)
      console.log('saturationPressureCurveResult:', saturationPressureCurveResult)
      let psychrometricCoefficientResult = psychrometricCoefficient(this.atmosphericPressure)
      console.log('psychrometricCoefficientResult:', psychrometricCoefficientResult)
      let modifiedPsychrometricCoefficientResult = modifiedPsychrometricCoefficient(psychrometricCoefficientResult, windSpeedResult)
      console.log('modifiedPsychrometricCoefficientResult:', modifiedPsychrometricCoefficientResult)
      let steamPressureResult = steamPressure(saturationPressureResult, this.umiRelativaMedia)
      console.log('steamPressureResult:', steamPressureResult)
      let solarDeclinationResult = solarDeclination(julianDayResult)
      console.log('solarDeclinationResult:', solarDeclinationResult)
      let latitudeResult = latitude(this.latitudeGraus, this.latitudeMinutos)
      console.log('latitudeResult:', latitudeResult)
      let sunriseAngleResult = sunriseAngle(latitudeResult, solarDeclinationResult)
      console.log('sunriseAngleResult:', sunriseAngleResult)
      let durationDayResult = durationDay(sunriseAngleResult)
      console.log('durationDayResult:', durationDayResult)
      let relativeEarthSunResult = relativeEarthSun(julianDayResult)
      console.log('relativeEarthSunResult:', relativeEarthSunResult)
      let radiationAtmosphereResult = radiationAtmosphere(relativeEarthSunResult, latitudeResult, solarDeclinationResult, sunriseAngleResult)
      console.log('radiationAtmosphereResult:', radiationAtmosphereResult)
      let incidentSolarRadiationResult = incidentSolarRadiationPM(this.insolation, durationDayResult, radiationAtmosphereResult)
      console.log('incidentSolarRadiationResult:', incidentSolarRadiationResult)
      let shortwaveRadiationResult = shortwaveRadiation(incidentSolarRadiationResult)
      console.log('shortwaveRadiationResult:', shortwaveRadiationResult)
      let longwaveRadiationResult = longwaveRadiation(this.insolation, durationDayResult, steamPressureResult, this.averageTemperature, this.maxTemp, this.minTemp)
      console.log('longwaveRadiationResult:', longwaveRadiationResult)
      let radiationBalanceResult = radiationBalance(shortwaveRadiationResult, longwaveRadiationResult)
      console.log('radiationBalanceResult:', radiationBalanceResult)

      let etoResult = etoPenMon(saturationPressureCurveResult, psychrometricCoefficientResult, radiationBalanceResult, modifiedPsychrometricCoefficientResult, this.averageTemperature, windSpeedResult, saturationPressureResult, steamPressureResult)
      console.log('eto:', etoResult)
      this.result = etoResult.toFixed(2)
      this.$store.dispatch('setEto', this.result)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
