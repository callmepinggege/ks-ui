import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/demo/home'
import Img from '@/demo/img'

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
    }
  ]
})
