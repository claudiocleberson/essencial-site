import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import Servicos from '../components/Servicos.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    {
      path: '/servicos',
      name: 'Servicos',
      component: Servicos
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if(to.hash)
    {
      return { selector: to.hash.offSetTop}
    }
  return { x: 0, y: 0 }
 }
})
