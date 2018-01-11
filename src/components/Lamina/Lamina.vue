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
              <div class="input-field col m12 s12">
                <input id="kc" type="text" class="validate" v-model.number="kc" @input="$v.kc.$touch()">
                <label for="kc">kc referente ao estágio de desenvolvimento da cultura:</label>
                <span class="error-message" v-if="!$v.kc.required">Entre com o valor do KC referente ao estágio de desenvolvimento da cultura</span>
              </div>
            </div>
            <div class="row">
              <div class="col m12 s12">
                <p>Você sabe a eficiência do seu sistema?</p>
                <select class="browser-default" v-model="efficiency">
                  <option value="no">Não</option>
                  <option value="yes" selected>Sim</option>
                </select>
                <div class="row efficiency-input" v-if="efficiency === 'yes'">
                  <div class="input-field">
                    <input id="system-efficiency" type="text" class="validate" v-model.number="systemEfficiency" @input="$v.systemEfficiency.$touch()">
                    <label for="system-efficiency">Eficiência do sistema: (%)</label>
                    <span class="error-message" v-if="!$v.systemEfficiency.required">Entre com o valor da eficiência do seu sistema</span>
                  </div>
                </div>
                <div class="row efficiency-table" v-else>
                  <table class="bordered responsive-table centered">
                    <thead>
                      <tr>
                        <th>Opção</th>
                        <th>Método</th>
                        <th>Sistema de Irrigação</th>
                        <th>Eficiência do referência (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="radio" id="value1" v-model="systemEfficiency" :value="60.01"/>
                          <label for="value1"></label>
                        </td>
                        <td>Superfície</td>
                        <td>Inundação</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value2" v-model="systemEfficiency" :value="65"/>
                          <label for="value2"></label>
                        </td>
                        <td>Superfície</td>
                        <td>Sulcos Abertos</td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value3" v-model="systemEfficiency" :value="75"/>
                          <label for="value3"></label>
                        </td>
                        <td>Superfície</td>
                        <td>Sulcos fechados ou interligados em bacias</td>
                        <td>75</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value4" v-model="systemEfficiency" :value="95.01"/>
                          <label for="value4"></label>
                        </td>
                        <td>Subterrâneo</td>
                        <td>Gotejamento subterrâneo ou enterrado</td>
                        <td>95</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value5" v-model="systemEfficiency" :value="60.02"/>
                          <label for="value5"></label>
                        </td>
                        <td>Subterrâneo</td>
                        <td>Subirrigação ou elevação do lençol freático</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value6" v-model="systemEfficiency" :value="80.01"/>
                          <label for="value6"></label>
                        </td>
                        <td>Subterrâneo</td>
                        <td>Convencional com linhas laterais ou em malha</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value7" v-model="systemEfficiency" :value="85.01"/>
                          <label for="value7"></label>
                        </td>
                        <td>Subterrâneo</td>
                        <td>Mangueiras perfuradas</td>
                        <td>85</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value8" v-model="systemEfficiency" :value="80"/>
                          <label for="value8"></label>
                        </td>
                        <td>Aspersão</td>
                        <td>Canhão autopropelido/Carretel enrolador</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value9" v-model="systemEfficiency" :value="85"/>
                          <label for="value9"></label>
                        </td>
                        <td>Aspersão</td>
                        <td>Pivô central (fixo ou rebocável)</td>
                        <td>85</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value10" v-model="systemEfficiency" :value="90.01"/>
                          <label for="value10"></label>
                        </td>
                        <td>Aspersão</td>
                        <td>Linear</td>
                        <td>90</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value11" v-model="systemEfficiency" :value="95"/>
                          <label for="value11"></label>
                        </td>
                        <td>Localizada</td>
                        <td>Gotejamento</td>
                        <td>95</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" id="value12" v-model="systemEfficiency" :value="90"/>
                          <label for="value12"></label>
                        </td>
                        <td>Localizada</td>
                        <td>Microaspersão</td>
                        <td>90</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="card-action">
            <button class="waves-effect waves-light btn" @click.prevent="calculate">Continuar</button>
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
      efficiency: 'yes',
      systemEfficiency: '',
      selectedMethod: '',
      dwi: '',
      kc: ''
    }
  },

  validations: {
    selectedMethod: {
      required
    },
    dwi: {
      required
    },
    kc: {
      required,
      numeric
    },
    systemEfficiency: {
      required,
      numeric
    }
  },

  methods: {
    calculate() {
      this.$store.dispatch('resetEto')
      this.$store.dispatch('setDwi', this.dwi)
      this.$store.dispatch('setKc', this.kc)
      this.$store.dispatch('setSystemIrrigationEfficiency', this.systemEfficiency)

      this.$router.push({ path: `/lamina/${this.selectedMethod}` })
    }
  }
}
</script>
