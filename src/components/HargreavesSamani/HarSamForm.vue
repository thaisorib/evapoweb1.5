<template>
  <div id="harsam-from" class="row">
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
              <input id="temperatureAM" type="text" class="validate" v-model.number="temperatureAM" @input="$v.temperatureAM.$touch()">
              <label for="temperatureAM">Temperatura: (9 horas)</label>
              <span class="error-message" v-if="!$v.temperatureAM.required">Entre com o valor da temperatura às 9 horas</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="temperaturePM" type="text" class="validate" v-model.number="temperaturePM" @input="$v.temperaturePM.$touch()">
              <label for="temperaturePM">Temperatura: (21 horas)</label>
              <span class="error-message" v-if="!$v.temperaturePM.required">Entre com o valor da temperatura às 21 horas</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="tempMax" type="text" class="validate" v-model.number="tempMax" @input="$v.tempMax.$touch()">
              <label for="tempMax">Temperatura Máxima: (˚C)</label>
              <span class="error-message" v-if="!$v.tempMax.required">Entre com o valor da temperatura máxima</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="tempMin" type="text" class="validate" v-model.number="tempMin" @input="$v.tempMin.$touch()">
              <label for="tempMin">Temperatura mínima: (˚C)</label>
              <span class="error-message" v-if="!$v.tempMin.required">Entre com o valor da temperatura mínima</span>
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
import { latitude } from '@/functions/latitudeHarSam.js'
import { averageTemp } from '@/functions/averageTemp.js'
import { solarDeclination } from '@/functions/solarDeclination.js'
import { sunriseAngle } from '@/functions/sunriseAngle.js'
import { relativeEarthSun } from '@/functions/relativeEarthSun.js'
import { radiationAtmosphere } from '@/functions/radiationAtmosphere.js'
import { etoHarSam } from '@/functions/etoHarSam.js'
import { required, numeric, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      DAYS: DAYS,
      MONTHS: MONTHS,
      YEARS: YEARS,
      result: 0,
      methodTitle: 'Metodo Hargreaves-Samani',
      methodDescription: 'O modelo de Hargreaves e Samani é utilizado na estimativa da evapotranspiração de referência, sendo muito útil para o manejo da irrigação, sendo o mesmo considerado de uso prático, pois utiliza elementos meteorológicos de fácil obtenção como a temperatura.',
      day: '',
      month: '',
      year: '',
      temperatureAM: '',
      temperaturePM: '',
      tempMax: '',
      tempMin: '',
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
    temperatureAM: {
      required
    },
    temperaturePM: {
      required
    },
    tempMax: {
      required
    },
    tempMin: {
      required
    },
    latitudeGraus: {
      required
    },
    latitudeMinutos: {
      required
    }
  },

  methods: {
    calculate() {
      let julianDayResult = julianDay(this.day, this.month, this.year)
      let averageTempResult = averageTemp(this.temperatureAM, this.temperaturePM, this.tempMax, this.tempMin)
      let latitudeResult = latitude(this.latitudeGraus, this.latitudeMinutos)
      let solarDeclinationResult = solarDeclination(julianDayResult)
      let sunriseAngleResult = sunriseAngle(latitudeResult, solarDeclinationResult)
      let relativeEarthSunResult = relativeEarthSun(julianDayResult)
      let radiationAtmosphereResult = radiationAtmosphere(relativeEarthSunResult, latitudeResult, solarDeclinationResult, sunriseAngleResult)
      let etoResult = etoHarSam(this.tempMax, this.tempMin, averageTempResult, radiationAtmosphereResult)

      this.result = etoResult.toFixed(2)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>