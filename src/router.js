import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './sweetTime/Welcome.vue'
// import Page404 from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {index: 0}
    },
    {
      path: '/404',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue'),
      meta: {index: 2}
    },
    {
      path: '/snow',
      name: 'snow',
      component: () => import('./views/Snow.vue')
    },
    {
      path: '/dna',
      name: 'dna',
      component: () => import('./views/DnaLoding.vue')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('./views/Show.vue')
    },
    {
      path: '/pic',
      name: 'pic',
      component: () => import('./views/pic.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/Message.vue')
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: () => import('./views/Canvas.vue')
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('./views/Weather.vue')
    },
    {
      path: '/gradientBg',
      name: 'gradientBg',
      component: () => import('./views/GradientBg.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('./views/Loading.vue')
    },
    {
      path: '/svgImage',
      name: 'svgImage',
      component: () => import('./views/SvgImage.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./sweetTime/Index.vue'),
      meta: {index: 1}
    },
    {
      path: '/newIndex',
      name: 'newIndex',
      component: () => import('./sweetTime/NewIndex.vue'),
      meta: {index: 1}
    },
    {
      path: '/santaClaus',
      name: 'santaClaus',
      component: () => import('./sweetTime/santaClaus.vue'),
      meta: {index: 1}
    },
    {
      path: '/clipPath',
      name: 'clipPath',
      component: () => import('./views/ClipPath.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./sweetTime/login.vue'),
      meta: {index: 1}
    }
  ]
})
