import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/demo/home'
import Img from '@/demo/img'
import Pullup from '@/demo/pullup'
import Svg from '@/demo/svg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/img',
      name: 'img',
      component: Img
    },
    {
      path: '/pullup',
      name: 'pullup',
      component: Pullup
    },
    {
      path: '/svg',
      name: 'svg',
      component: Svg
    }
  ]
})
