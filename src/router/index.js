import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'

import Home from '@/pages/Home'
import PenMon from '@/pages/PenMon'
import HarSam from '@/pages/HarSam'
import JenHai from '@/pages/JenHai'
import Tanque from '@/pages/Tanque'
import Makkink from '@/pages/Makkink'
import Linacre from '@/pages/Linacre'
import Error from '@/pages/Error'

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
      path: '/penman-monteith',
      name: 'PenMon',
      component: PenMon
    },
    {
      path: '/linacre',
      name: 'Linacre',
      component: Linacre
    },
    {
      path: '/hargreaves-samani',
      name: 'HarSam',
      component: HarSam
    },
    {
      path: '/jensen-haise',
      name: 'JanHai',
      component: JenHai
    },
    {
      path: '/makkink',
      name: 'Makkink',
      component: Makkink
    },
    {
      path: '/tanque',
      name: 'Tanque',
      component: Tanque
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})