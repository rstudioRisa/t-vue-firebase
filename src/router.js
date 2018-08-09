import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/Top.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: HelloWorld
    }
  ]
})
