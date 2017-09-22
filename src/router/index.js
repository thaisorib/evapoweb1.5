import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import PenMon from '@/pages/PenMon'
import HarSam from '@/pages/HarSam'
import JenHai from '@/pages/JenHai'
import Tanque from '@/pages/Tanque'
import Makkink from '@/pages/Makkink'
import Linacre from '@/pages/Linacre'
import Error from '@/pages/Error'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/penmon',
      name: 'PenMon',
      component: PenMon
    },
    {
      path: '/linacre',
      name: 'Linacre',
      component: Linacre
    },
    {
      path: '/harsam',
      name: 'HarSam',
      component: HarSam
    },
    {
      path: '/jenhai',
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