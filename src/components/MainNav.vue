<template>
    <div class="container nav">
        <div v-if="shouldShowHamburgerMenu" class="row">
            <div class="col-6 offset-6 hamburger">
                <button @click="toggleDrawer">
                    <i v-if="!isDrawerOpen" class="fas fa-bars"></i>
                    <i v-if="isDrawerOpen" class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div v-if="isDrawerOpen" class="row">
            <div class="col-12">
                <nav>
                    <ul>
                        <li>
                            <router-link to="/">
                                <span class='ico'><i class='fas fa-home'></i></span>
                                {{$t('nav.home')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about">
                                <span class='ico'><i class="fas fa-info-circle"></i></span>
                                {{$t('nav.about')}}
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/blog">
                                <span class='ico'><i class="fas fa-file-alt"></i></span>
                                    Blog
                            </router-link>
                        </li> -->
                        <li>
                            <router-link to="/photography">
                                <span class='ico'><i class="fas fa-camera-retro"></i></span>
                                {{$t('nav.photography')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/music">
                                <span class="ico"><i class="fas fa-music"></i></span>
                                {{$t('nav.music')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/gaming">
                                <span class="ico"><i class="fas fa-gamepad"></i></span>
                                {{$t('nav.gaming')}}
                            </router-link>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer" @click="tracking('linkedin')">
                            <span class='ico'><i class='fab fa-linkedin'></i></span>
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer" @click="tracking('github')">
                                <span class='ico'><i class='fab fa-github'></i></span>
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun')">
                                <span class='ico'><i class="fas fa-sun"></i></span>
                                EightRayedSun
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            isDrawerOpen: true,
            viewportWidth: 0,
        }
    },
    methods: {
        tracking(site) {
            this.$ga.event({
                eventCategory: `Clicked ${site}`,
                eventAction: 'click'
            });
        },
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        },
        onResize() {
            this.viewportWidth = window.innerWidth;
        }
    },
    computed: {
        shouldShowHamburgerMenu() {
            if (this.viewportWidth < 1024) {
                return true;
            }
            return false;
        }
    },
    mounted() {
        this.viewportWidth = window.innerWidth;
        if (this.viewportWidth < 1024) {
            this.isDrawerOpen = false;
        }
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
    background-color: #ff9900;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 15px;
    ul {
    display: flex;
    width: 100%;
    list-style-type: none;
    padding: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    li {
        flex: 1 0 auto;
        width: 100%;
        a {
            text-align: center;
            display: block;
            span {
                display: block;
            }
        }
        @media (min-width: 1024px) {
            display: inline;
            width: auto;
        }
    }
}
}
.hamburger{
    padding: 18px;
    text-align: right;
    button {
        border: none;
    }
}

</style>
