<template>
    <div id="app" v-bind:class="[{'dark-theme': darkTheme}]">
        <header-component ref="header" />
        <main-nav />
        <div id="page-wrap" class="content-wrapper">
            <router-view  v-slot="{ Component }">
                <keep-alive>
                    <transition :name="transition" leave-active-class="dissapear">
                        <component :is="Component" />
                    </transition>
                </keep-alive>
            </router-view>
            
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import MainNav from '@/components/MainNav.vue';
import _ from 'lodash';
import {sync} from 'vuex-pathify';
export default {
    name: 'app',
    components: {
        HeaderComponent,
        MainNav
    },
    data() {
        return {
            transitions: ['slideLeft', 'fadeRight', 'bounceDown', 'zoom', 'fadeUp'],
            transition: '',
            contentWrapperStyle: null
        };
    },
    computed: {
        darkTheme: sync('DarkTheme')
    },
    methods: {
        changeTransition() {
            this.transition = this.transitions[this.getRandomNumber()];
        },
        getRandomNumber() {
            return _.random(0, 4);
        }
    },
    mounted() {
        this.changeTransition();
        
        this.$nextTick(()=> {
            this.contentWrapperStyle = {
                maxHeight: `calc(100vh - ${this.$refs.header.$el.offsetHeight}px)`
            }
        });
        this.$router.afterEach(() => {
            this.changeTransition();
        });
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Questrial|Raleway");
@import "@/styles/variables.scss";
html,
body {
    font-family: "Questrial", sans-serif;
    font-size: 85%;
    color: #212529;
    @media (min-width: 768px) {
        font-size: 90%;
    }
    @media (min-width: 1024px) {
        font-size: 100%;
    }
}
body, #app{
    &.dark-theme, &.dark{
        background-color: #010617;
        color: #e6e4e4;
        a{
            color: #20425B
        }
        .card{
            background-color: #010617;
            border-color: #20425B;
        }
        .theme-toggle{
            background-color: #bd471a;
            border-color: #f78703;
        }
    }
}
#app {
    @media (min-width: 1024px) {
        max-height: 100vh;
        overflow: hidden;
    }
}
h1,
h2,
h3,
h4 {
    font-family: "Raleway", sans-serif;
}
a {
    color: #0066ff;
}
.dissapear {
    display: none;
}

.btn {
    border-radius: 15px;
}
.shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(255,153,0,0.25), 0 10px 10px rgba(255,153,0,0.22);
    }
}
.card{
    padding: 25px 0;
    background-color: $cardBackgroundColor;
    border-color: #0066FF;

    button {
        background-color: $buttonGrey;
        border-color: $buttonGrey;
    }
}
.subIntro {
    margin-bottom: 18px;
}
.sub-nav{
    background-color: $orange;
    border-radius: 5px;
    nav {
        ul {
            li {
                margin-bottom: 0;
            }
        }
    }
}
.content-wrapper {
    @media (min-width: 1024px) {
        max-height: calc(100vh - #{$headerHeight + 5px});
        overflow-y: auto;
        height: 100vh;
        display: flex;
    }
}
.widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
:root:root:root .bm-burger-button {
    top: auto;
    bottom: 35px;
    z-index: 999;
    position: fixed;
    @media (min-width: 1024px) {
        top: 35px;
        bottom: auto;
        position: absolute;
    }
}
.strike {
    text-decoration: line-through;
}
</style>
