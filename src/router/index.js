import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'

import Home from '@/components/Home/Home'
import Error from '@/components/Error/Error'

import Eto from '@/components/Eto/Eto'
import Lamina from '@/components/Lamina/Lamina'
import CalculateLamina from '@/components/Lamina/CalculateLamina'

import PenMon from '@/components/PenmanMonteith/PenMon'
import HarSam from '@/components/HargreavesSamani/HarSam'
import JenHai from '@/components/JensenHaise/JenHai'
import Tanque from '@/components/Tanque/Tanque'
import Makkink from '@/components/Makkink/Makkink'
import Linacre from '@/components/Linacre/Linacre'

Vue.use(Router)
Vue.use(Vuelidate)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/eto',
      name: 'eto',
      component: Eto,
      children: [
        {
          path: 'penman-monteith',
          name: 'PenMon',
          component: PenMon
        },
        {
          path: 'linacre',
          name: 'Linacre',
          component: Linacre
        },
        {
          path: 'hargreaves-samani',
          name: 'HarSam',
          component: HarSam
        },
        {
          path: 'jensen-haise',
          name: 'JanHai',
          component: JenHai
        },
        {
          path: 'makkink',
          name: 'Makkink',
          component: Makkink
        },
        {
          path: 'tanque',
          name: 'Tanque',
          component: Tanque
        }
      ]
    },
    {
      path: '/lamina',
      name: 'Lamina',
      component: Lamina,
    },
    {
      path: '/lamina/:method',
      component: CalculateLamina,
      props: true
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})