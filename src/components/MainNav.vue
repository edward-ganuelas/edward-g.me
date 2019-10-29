<template>
    <Slide right @closeMenu="toggleDrawer" @openMenu="toggleDrawer" :burgerIcon="!isDrawerOpen">
        <router-link to="/">
            <span class='ico'><i class='fas fa-home'></i></span>
            {{$t('nav.home')}}
        </router-link>
        <router-link to="/about">
            <span class='ico'><i class="fas fa-info-circle"></i></span>
            {{$t('nav.about')}}
        </router-link>
        <router-link to="/photography">
            <span class='ico'><i class="fas fa-camera-retro"></i></span>
            {{$t('nav.photography')}}
        </router-link>
        <router-link to="/blog">
            <span class='ico'><i class="fas fa-file-alt"></i></span>
                Blog
            </router-link>
        <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer" @click="tracking('linkedin')">
            <span class='ico'><i class='fab fa-linkedin'></i></span>
                Linkedin
            </a>
        <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer" @click="tracking('github')">
            <span class='ico'><i class='fab fa-github'></i></span>
            Github
        </a>
        <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun')">
            EightRayedSun
        </a>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu';
export default {
    components: {
        Slide
    },
    methods: {
        tracking(site) {
            this.$ga.event({
                eventCategory: `Clicked ${site}`,
                eventAction: 'click'
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
