import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Photography from '@/views/Photography';
import Facts from '@/views/About/Facts';
import Bio from '@/views/About/Bio';
import Music from '@/views/About/Music';
import Photos from '@/views/Photos/Photos';
import Gear from '@/views/Photos/Gear';
import Projects from '@/views/Photos/Projects';
import BlogPosts from '@/components/blog/BlogPosts';
import BlogPost from '@/components/blog/BlogPost';

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
    },
    {
      path: '/post/:title',
      name: 'Post',
      component: BlogPost,
      props: (route) =>({
          id: route.query.id,
          title: route.params.title
      })
  },
  ]
})
