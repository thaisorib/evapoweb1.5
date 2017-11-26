<template>
  <div id="lamina">
    <PageHeader />
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card white darken-1">
          <div class="card-content">
            <span class="card-title">Lâmina Bruta sugerida para Irrigação</span>
            <br>
            <div class="row">
              <label>Métodos</label>
              <select class="browser-default" v-model="selectedMethod">
                <option value="" disabled selected>Escolha um método</option>
                <option :value="method.route" v-for="method in methods" :key="method.name">{{ method.name }}</option>
              </select>
              <span class="error-message" v-if="$v.selectedMethod.$invalid">Escolha um método</span>
            </div>
            <div class="row">
              <label>Dias decorridos da última irrigação: (dias)</label>
              <select class="browser-default" v-model.number="dwi">
                <option value=""disabled selected>Escolha um dia</option>
                <option :value="day" v-for="day in 15" :key="day">{{ day }}</option>
              </select>
              <span class="error-message" v-if="$v.dwi.$invalid">Entre com o valor dos dias decorridos da última irrigação</span>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="kc" type="text" class="validate" v-model.number="kc" @input="$v.kc.$touch()">
                <label for="kc">KC média da cultura:</label>
                <span class="error-message" v-if="!$v.kc.required">Entre com o valor do KC médio da sua cultura</span>
              </div>
            </div>
          </div>
          <div class="card-action">
            <button class="waves-effect waves-light btn" @click.prevent="calculate">Calcular</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/share/PageHeader'
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  components: {
    PageHeader
  },

  data() {
    return {
      methods: [
        {
          route: 'penman-monteith',
          name: 'Penman-Monteith(FAO-56)'
        },
        {
          route: 'linacre',
          name: 'Linacre'
        },
        {
          route: 'hargreaves-samani',
          name: 'Hargreaves-Samani'
        },
        {
          route: 'jensen-haise',
          name: 'Jensen-Haise'
        },
        {
          route: 'makkink',
          name: 'Makkink'
        },
        {
          route: 'tanque',
          name: 'Tanque Classe A'
        }
      ],
      selectedMethod: '',
      dwi: '',
      kc: ''
    }
  },

  validations: {
    selectedMethod: {
      required,
    },
    dwi: {
      required,
    },
    kc: {
      required,
      numeric,
    },
  },

  methods: {
    calculate() {
      this.$router.push({ path: `/lamina/${this.selectedMethod}`, query: { dwi: this.dwi, kc: this.kc }})
    }
  }
}
</script>
