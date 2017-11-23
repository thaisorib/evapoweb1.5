<template>
  <div id="calculate-lamina">
    <PageHeader />
    <component :is="selectedMethod" v-for="n in 3" :key="n"></component>
  </div>
</template>

<script>
import PenMon from '@/pages/PenMon'
import HarSam from '@/pages/HarSam'
import JenHai from '@/pages/JenHai'
import Tanque from '@/pages/Tanque'
import Makkink from '@/pages/Makkink'
import Linacre from '@/pages/Linacre'

export default {
  components: {
    'penman-monteith': PenMon,
    HarSam,
    JenHai,
    Tanque,
    Makkink,
    Linacre
  },
  data() {
    return {
      selectedMethod: this.$route.params.method
    }
  },
  created() {
    this.selectedMethod = this.$route.params.method
  }
}
</script>
