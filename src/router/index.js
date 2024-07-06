import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import AboutSite from '@/views/About/AboutSite.vue';
import Bio from '@/views/About/Bio.vue';
// import BlogPost from '@/components/blog/BlogPost.vue';
// import BlogPosts from '@/components/blog/BlogPosts.vue';
import Facts from '@/views/About/Facts.vue';
import Gear from '@/views/Photos/Gear.vue';
import Music from '@/views/Music.vue';
import Photography from '@/views/Photography.vue';
import Photos from '@/views/Photos/Photos.vue';
import Projects from '@/views/Photos/Projects.vue';
import Gaming from '@/views/Gaming.vue';


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
