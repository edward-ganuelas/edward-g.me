<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h1><router-link to="/">{{content.hero}}</router-link>
              <span>{{content.subHero}}</span>
              </h1>
            </div>
            <div class="col-6 offset-6 col-lg-2 offset-lg-4">
              <Slide right>
                <router-link to="/"><span class='ico'><i class='fas fa-home'></i></span>Home</router-link>
                <router-link to="/about-me"><span class='ico'><i class='fas fa-user'></i></span>About Me</router-link>
                <router-link to="/photography"><span class='ico'><i class="fas fa-camera-retro"></i></span>Photography</router-link>
                <router-link to="/blog"><span class='ico'><i class="fas fa-file-alt"></i></span>Blog</router-link>
                <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer" @click="tracking('linkedin')"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a>
                <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer" @click="tracking('github')"><span class='ico'><i class='fab fa-github'></i></span>Github</a>
                <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun')">EightRayedSun</a>
                <button class="btn change-theme btn-outline-primary theme-toggle" @click="toggleTheme">{{themeLabel}}</button>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import anime from "animejs";
import Darkmode from 'darkmode-js';
import { Slide } from 'vue-burger-menu';

const DARK_MODE_OPTIONS = Object.freeze({
  mixColor: '#fff', // default: '#fff'
  backgroundColor: 'transparent',  // default: '#fff'
  autoMatchOsTheme: true // default: true
});

export default {
  name: "HeaderNav",
  components: {
    Slide
  },
  data() {
    return {
      content: "",
      navigation: {
        linkedin: {
          label: "",
          to: "/linkedin"
        },
        github: {
          label: "<span class='ico'><i class='fab fa-github'></i></span>Github",
          to: "/github"
        },
        eightray: {
          label: "EightRayedSun",
          to: "/eightray"
        }
      },
      drawer: null,
      showTheme: false,
      themeLabels: Object.freeze({
        DARK_MODE: 'Dark Mode',
        NORMAL: 'Normal'
      }),
      darkMode: null,
      isDarkModeActive: false
    };
  },
  computed: {
    themeLabel() {
      return this.isDarkModeActive ? this.themeLabels.NORMAL : this.themeLabels.DARK_MODE;
    }
  },
  methods: {
    getContent: function() {
      axios.get("static/json/header.json").then(x => {
        this.content = x.data.content;
      });
    },
    tracking(site) {
      this.$ga.event({
        eventCategory: `Clicked ${site}`,
        eventAction: "click"
      });
    },
    animateNav() {
      anime({
        targets: "nav.main li",
        translateX: -100,
        delay: 1000,
        complete: () => {
          anime({
            targets: "nav.main li",
            translateX: 0
          });
        }
      });
    },
    activateNavAnimation() {
      if (window.matchMedia("(max-width: 420px").matches) {
        this.animateNav();
      }
    },
    toggleTheme() {
      this.darkMode.toggle();
      this.isDarkModeActive = this.darkMode.isActivated();
    }
  },
  beforeMount: function() {
    this.getContent();
    this.darkMode = new Darkmode(DARK_MODE_OPTIONS);
  },
  mounted() {
    this.activateNavAnimation();
    window.onresize = this.activateNavAnimation();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin-top: 24px;
  a {
    text-decoration: none;
    color: #212529;
  }
  span{
    font-size: 1rem;
    font-family: "Questrial", sans-serif;
    font-weight: normal;
    display: block;
  }
}
.header {
  @media (min-width: 768px) {
    padding-left: 15px;
  }
}
.change-theme{
  margin: 30px auto 30px auto;
  display: block;
}
.dark-theme, .darkmode--activated{
  .theme-toggle{
    background-color: #1900ff;
    border-color: #1900ff;
    color: #C0C0C0;
  }
  h1{
    a{
      color: #C0C0C0!important;
    }
  }
}
</style>
