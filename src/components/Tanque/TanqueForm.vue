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
              <span class="error-message" v-if="!$v.fetch.required">Este campo é obrigatório. O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="daily-humidity" type="text" class="validate" v-model.number="dailyHumidity" @input="$v.dailyHumidity.$touch()">
              <label for="daily-humidity">Umidade Relativa média do ar: (%)</label>
              <span class="error-message" v-if="!$v.dailyHumidity.required">Este campo é obrigatório. O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="wind-speed" type="text" class="validate" v-model.number="windSpeed" @input="$v.windSpeed.$touch()">
              <label for="wind-speed">Velocidade do vento a 2 metros: (m/s)</label>
              <span class="error-message" v-if="!$v.windSpeed.required">Este campo é obrigatório. O separador decimal deve ser ponto e não vírgula!</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12 s12">
              <input id="eca" type="text" class="validate" v-model.number="eca" @input="$v.eca.$touch()">
              <label for="eca">ECA: (mm/dia)</label>
              <p class="error-message" v-if="!$v.eca.required">Este campo é obrigatório. O separador decimal deve ser ponto e não vírgula!</p>
            </div>
          </div>
          <div class="row" v-if="result">
            <div class="col m8 s12 offset-m2">
              <p class="result">{{ result }} mm/dia</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <button class="waves-effect waves-light btn" :class="{ disabled: isDisabled }" @click="calculate">Calcular</button>
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
      methodDescription: 'Esse método consiste em medir diariamente a evaporação de um tanque metálico para estimar a ETo. Para conversão da evaporação do Tanque Classe A (ECA) em ETo, utiliza-se o coeficiente (Kp), o qual é função da bordadura ao redor do tanque, velocidade do vento a 2 metros e umidade relativa do ar.',
      methodTitle: 'Método Tanque Classe A',
      fetch: '',
      dailyHumidity: '',
      windSpeed: '',
      eca: ''
    }
  },

  validations: {
    fetch: {
      required
    },
    dailyHumidity: {
      required
    },
    windSpeed: {
      required
    },
    eca: {
      required
    }
  },

  computed: {
    isDisabled() {
      return this.eca === ''
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


