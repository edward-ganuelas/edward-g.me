import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/pages/About'
import Photography from '@/components/pages/Photography'
import Facts from '@/components/pages/About/Facts'
import Bio from '@/components/pages/About/Bio'
import Music from '@/components/pages/About/Music'
import Photos from '@/components/pages/Photos/Photos'
import Gear from '@/components/pages/Photos/Gear'
import Projects from '@/components/pages/Photos/Projects'
import BlogPosts from '@/components/blog/BlogPosts';

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
      component: About,
      children:[
        {
          path: '',
          name: 'Bio',
          component: Bio
        },
        {
          path: 'facts',
          name: 'Facts',
          component: Facts
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        },
      ]
    },
    {
      path: '/photography',
      component: Photography,
      children:[
        {
          path: '',
          name: 'Photos',
          component: Photos
        },
        {
          path: 'gear',
          name: 'Gear',
          component: Gear
        },
        {
          path: 'projects',
          name: 'Projects',
          component: Projects
        }
      ]
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPosts
    }
  ]
})
