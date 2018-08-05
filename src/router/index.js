import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/pages/About'
import Photography from '@/components/pages/Photography'
import Facts from '@/components/pages/About/Facts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-me',
      name: 'About',
      component: About,
      children:[
        {
          path: 'facts',
          name: 'Facts',
          component: Facts
        }
      ]
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photography
    }
  ]
})
