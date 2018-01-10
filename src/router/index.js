import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/linkedin',
      name: 'Linkedin',
      beforeEnter: () =>{
        window.location.href="https://www.linkedin.com/in/epganuelas/";
      }
    },
    {
      path: '/github',
      name: 'GitHub',
      beforeEnter: () =>{
        window.location.href="https://github.com/edward-ganuelas";
      }
    },
    {
      path: '/eightray',
      name: 'EightRay',
      beforeEnter: () =>{
        window.location.href="https://eightrayedsun.com/";
      }
    }
  ]
})
