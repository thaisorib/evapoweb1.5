<template>
  <div id="precipitation" class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content precipitation-card">
          <span class="card-title">Dados sobre Precipitação</span>
          <div class="row">
            <div class="col s6">
              <p>Houve precipitação neste dia?</p>
              <select class="browser-default" v-model="precipitation">
                <option value="no" selected>Não</option>
                <option value="yes">Sim</option>
              </select>
            </div>
            <div class="col s6" v-if="precipitation === 'yes'">
              <div class="input-field">
                <input id="dailyPrecipitation" type="text" class="validate" v-model.number="dailyPrecipitation">
                <label for="dailyPrecipitation" @blur="setPrecipitation" @keypress.enter="setPrecipitation">Precipitação: (mm)</label>
                <button
                  class="waves-effect waves-light btn"
                  :class="{ disabled: isDisabled }"
                  @click="setPrecipitation">Calcular</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'precipitation',
  data() {
    return {
      precipitation: '',
      dailyPrecipitation: ''
    }
  },
  computed: {
    isDisabled() {
      return this.dailyPrecipitation === ''
    }
  },
  methods: {
    setPrecipitation() {
      this.$store.dispatch('setDailyPrecipitation', this.dailyPrecipitation)
    }
  }
}
</script>

<style lang="scss" scoped>
#app .card .card-content {
  margin-top: -30px;
}
</style>
