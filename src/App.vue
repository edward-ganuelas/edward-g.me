<template>
    <div id="app" v-bind:class="[{'dark-theme': darkTheme}]">
        <header-nav ref="headerNav" />
        <div class="content-wrapper">
             <transition :name="transition" leave-active-class="dissapear">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import HeaderNav from "./components/Header";
import _ from "lodash";
import {sync} from "vuex-pathify";
export default {
    name: "app",
    components: {
        HeaderNav
    },
    data() {
        return {
            transitions: ["slideLeft", "fadeRight", "bounceDown", "zoom", "fadeUp"],
            transition: "",
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
            console.log(this.$refs.headerNav.$el);
            this.contentWrapperStyle = {
                maxHeight: `calc(100vh - ${this.$refs.headerNav.$el.offsetHeight}px)`
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
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
@import "./node_modules/bootstrap/scss/_buttons.scss";
@import "./node_modules/bootstrap/scss/_button-group.scss";
@import "./node_modules/bootstrap/scss/_card.scss";
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
    max-height: 100vh;
    overflow: hidden;
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
span.ico {
     margin-right: 8px;
}
.btn {
    border-radius: 15px;
}
.shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
}
.card{
    padding: 25px 0;
    background-color: $cardBackgroundColor;
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
    max-height: calc(100vh - #{$headerHeight + 5px});
    overflow-y: auto;
}
.widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
