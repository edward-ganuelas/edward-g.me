import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import AboutSite from '@/views/About/AboutSite';
import Bio from '@/views/About/Bio';
// import BlogPost from '@/components/blog/BlogPost';
// import BlogPosts from '@/components/blog/BlogPosts';
import Facts from '@/views/About/Facts';
import Gear from '@/views/Photos/Gear';
import Music from '@/views/Music';
import Photography from '@/views/Photography';
import Photos from '@/views/Photos/Photos';
import Projects from '@/views/Photos/Projects';
import Gaming from '@/views/Gaming';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            component: About,
            children:[
                {
                    path: 'about-site',
                    name: 'AboutSite',
                    component: AboutSite
                },
                {
                    path: '',
                    name: 'Bio',
                    component: Bio
                },
                {
                    path: 'facts',
                    name: 'Facts',
                    component: Facts
                }
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
        // {
        //     path: '/blog',
        //     name: 'Blog',
        //     component: BlogPosts
        // },
        {
            path: '/music',
            name: 'Music',
            component: Music
        }, 
        {
            path: '/gaming',
            name: 'Gaming',
            component: Gaming
        }, 
        // {
        //     path: '/post/:title',
        //     name: 'Post',
        //     component: BlogPost,
        //     props: (route) => ({
        //         id: route.query.id,
        //         title: route.params.title
        //     })
        // },
    ]
})
