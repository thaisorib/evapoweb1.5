<template>
  <div id="tanque-form" class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content">
          <span class="card-title">{{ methodTitle }}</span>
          <p class="method-description">
            {{ methodDescription }}
          </p>
          <br>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="fetch" type="text" class="validate" v-model.number="fetch" @input="$v.fetch.$touch()">
              <label for="fetch">Bordadura: (metros)</label>
              <span class="error-message" v-if="!$v.fetch.between">O valor de bordadura deve estar entre 1m até 1000m</span>
              <span class="error-message" v-if="!$v.fetch.required">Este campo é obrigatório</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="daily-humidity" type="text" class="validate" v-model.number="dailyHumidity" @input="$v.dailyHumidity.$touch()">
              <label for="daily-humidity">Umidade Relativa média diária: (%)</label>
              <span class="error-message" v-if="!$v.dailyHumidity.between">Valor da umidade relativa deve estar entre 30% e 84%</span>
              <span class="error-message" v-if="!$v.dailyHumidity.required">Este campo é obrigatório</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="wind-speed" type="text" class="validate" v-model.number="windSpeed" @input="$v.windSpeed.$touch()">
              <label for="wind-speed">Velocidade do vento a 2 metros (U2): (m/s)</label>
              <span class="error-message" v-if="!$v.windSpeed.between">Valor da velocidade do vento deve estar entre 1m/s e 8m/s</span>
              <span class="error-message" v-if="!$v.windSpeed.required">Este campo é obrigatório</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="eca" type="text" class="validate" v-model.number="eca" @input="$v.eca.$touch()">
              <label for="eca">ECA: (mm/dia)</label>
              <p class="error-message" v-if="!$v.eca.required">Este campo é obrigatório.</p>
            </div>
          </div>
          <div class="row" v-if="result">
            <div class="col m8 s12 offset-m2">
              <p class="result">{{ result }} mm/dia</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <button class="waves-effect waves-light btn" @click="calculate">Calcular</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kp } from '@/functions/kp.js'
import { etoTanque } from '@/functions/etoTanque.js'
import { required, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      result: 0,
      etoArray: [],
      methodDescription: 'Esse método consiste em medir diariamente a evaporação de um tanque metálico para estimar a ETo. Para converter a evaporção do Tanque Classe A (ECA) em ETo utiliza-se o coeficiente (Kp).',
      methodTitle: 'Método Tanque Classe A',
      fetch: '',
      dailyHumidity: '',
      windSpeed: '',
      eca: ''
    }
  },

  validations: {
    fetch: {
      required,
      between: between(1, 1000)
    },
    dailyHumidity: {
      required,
      between: between(30, 84)
    },
    windSpeed: {
      required,
      between: between(1, 8)
    },
    eca: {
      required
    }
  },

  methods: {
    calculate() {
      let kpResult = kp(this.fetch, this.dailyHumidity, this.windSpeed)
      let etoResult = etoTanque(kpResult, this.eca)
      this.result = etoResult.toFixed(2)

      this.etoArray.push(this.result)
      this.$store.dispatch('setEto', Number(this.result))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


