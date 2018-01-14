<template>
  <div id="precipitation" class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content precipitation-card">
          <span class="card-title">Dados sobre Precipitação</span>
            <div class="input-field">
              <input id="dailyPrecipitation" type="text" class="validate" v-model.number="dailyPrecipitation">
              <label for="dailyPrecipitation">Precipitação: (mm)</label>
              <span class="error-message" v-if="$v.dailyPrecipitation.$invalid">Caso não houve precipitação neste dia, adicione 0 ao campo</span>
            </div>
          </div>
          <div class="card-action">
          <button class="waves-effect waves-light btn" :class="{ disabled: isDisabled }" @click="setPrecipitation">Calcular</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'precipitation',
  data() {
    return {
      precipitation: '',
      dailyPrecipitation: ''
    }
  },
  validations: {
    dailyPrecipitation: {
      required
    }
  },
  computed: {
    isDisabled() {
      return this.dailyPrecipitation === ''
    }
  },
  methods: {
    setPrecipitation() {
      if(this.precipitation === 'no') {
        this.dailyPrecipitation = 0
      }
      this.$store.dispatch('setDailyPrecipitation', this.dailyPrecipitation, this.$store.state.eto)
    }
  }
}
</script>

<style lang="scss" scoped>
#app .card .card-content {
  margin-top: -30px;
}
</style>
