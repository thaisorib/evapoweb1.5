import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'

import Home from '@/pages/Home'
import Error from '@/pages/Error'

import Eto from '@/pages/Eto'
import Lamina from '@/pages/Lamina'

import PenMon from '@/pages/PenMon'
import HarSam from '@/pages/HarSam'
import JenHai from '@/pages/JenHai'
import Tanque from '@/pages/Tanque'
import Makkink from '@/pages/Makkink'
import Linacre from '@/pages/Linacre'

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
        },
      ]
    },
    {
      path: '/lamina',
      name: 'Lamina',
      component: Lamina
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})