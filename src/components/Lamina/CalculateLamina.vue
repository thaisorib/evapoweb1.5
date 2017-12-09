<template>
  <div id="calculate-lamina">
    <PageHeader />
    <template v-for="day in dwi">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card grey lighten-4">
            <div class="card-content precipitation-heder">
              <h6 class="card-title">Dados do dia: <strong>{{ day }}</strong></h6>
            </div>
          </div>
        </div>
      </div>
      <component :is="selectedMethod" :key="day"></component>
      <Precipitation />
    </template>
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <button class="waves-effect waves-light btn" @click="calculate()">Resultado</button>
      </div>
    </div>
    <Results :laminaBruta="lbisResult"/>
  </div>
</template>

<script>
import PageHeader from '@/share/PageHeader'
import Precipitation from '@/components/Lamina/Precipitation'
import Results from '@/components/Lamina/Results'
import PenMon from '@/components/PenmanMonteith/PenMonForm'
import HarSam from '@/components/HargreavesSamani/HarSamForm'
import JenHai from '@/components/JensenHaise/JenHaiForm'
import Tanque from '@/components/Tanque/TanqueForm'
import Makkink from '@/components/Makkink/MakkinkForm'
import Linacre from '@/components/Linacre/LinacreForm'

export default {
  components: {
    PageHeader,
    Precipitation,
    Results,
    'penman-monteith': PenMon,
    'hargreaves-samani': HarSam,
    'jensen-haise': JenHai,
    Tanque,
    Makkink,
    Linacre
  },

  data() {
    return {
      precipitation: '',
      precipitationDay: '',
      selectedMethod: '',
      dwi: '',
      kc: '',
      etcResult: [],
      lbisResult: '',
      effectivePrecipitationResult: []
    }
  },

  methods: {
    calculate() {
      this.effectivePrecipitation()
      this.etc()
      this.lbis()
    },

    effectivePrecipitation() {
      const eto = this.$store.state.eto
      const dailyPrecipitation = this.$store.state.dailyPrecipitation

      this.effectivePrecipitationResult = eto.map((elem, index) => {
        return (dailyPrecipitation[index] - (0.2) * elem)
      })
    },

    etc() {
      const eto = this.$store.state.eto
      const kc = this.$store.state.kc

      this.etcResult = eto.map((elem, index) => {
        return (eto[index] * kc)
      })
    },

    lbis() {
      const systemEfficiency = this.$store.state.systemIrrigationEfficiency

      this.lbisResult = this.etcResult.reduce((laminaBruta, val, index) => {
        return laminaBruta + (val - this.effectivePrecipitationResult[index])
      }, 0)

      console.log(this.lbisResult)
      console.log(this.lbisResult/systemEfficiency)

      if((this.lbisResult / systemEfficiency) < 0) {
        this.lbisResult = "Olá! Você não necessita irrigar, pois durante esses dias a chuva foi suficiente para atender a necessidade hídrica da sua cultura"
      }
    }
  },

  created() {
    this.selectedMethod = this.$route.params.method
    this.dwi = this.$store.state.dwi
    this.kc = this.$store.state.kc
  }
}
</script>

<style lang="scss" scoped>
  .precipitation-heder {
    margin-bottom: -40px;
  }
</style>