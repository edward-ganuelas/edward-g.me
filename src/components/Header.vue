<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6">
              <h1><router-link to="/">{{content.hero}}</router-link>
              <span>{{content.subHero}}</span>
              </h1>
            </div>
            <div class="col-2 offset-4">
              <button class="btn change-theme btn-outline-primary" @click="toggleTheme">Change Theme</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <transition name="slideDown" leave-active-class="dissapear">
          <theme-selector v-if="showTheme" />
        </transition>
      </div>
        <div class="col-12">
          <nav class="main">
            <ul>
              <li class="leftArrow"><i class="fas fa-chevron-left"></i></li>
              <li>
                <router-link to="/"><span class='ico'><i class='fas fa-home'></i></span>Home</router-link>
              </li>
              <li>
                <router-link to="/about-me"><span class='ico'><i class='fas fa-user'></i></span>About Me</router-link>
              </li>
              <li>
                <router-link to="/photography"><span class='ico'><i class="fas fa-camera-retro"></i></span>Photography</router-link>
              </li>
              <li>
                <router-link to="/blog"><span class='ico'><i class="fas fa-file-alt"></i></span>Blog</router-link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer" @click="tracking('linkedin')"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer" @click="tracking('github')"><span class='ico'><i class='fab fa-github'></i></span>Github</a>
              </li>
              <li>
                <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun')">EightRayedSun</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import anime from "animejs";
import ThemeSelector from "./ThemeSelector";
export default {
  name: "HeaderNav",
  components:{
    ThemeSelector
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
      showTheme: false
    };
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
    toggleTheme(){
      this.showTheme = this.showTheme ? false : true;
    }
  },
  beforeMount: function() {
    this.getContent();
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
nav {
  white-space: nowrap;
  overflow-x: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    @media (min-width: 1440px) {
      width: 61.8%;
      float: right;
      flex-direction: row;
    }
    li {
      flex: 1 0;
      text-align: center;
      margin: 0 1rem;
      a {
        text-decoration: none;
      }
    }
  }
}
.fab-wrapper {
  padding: 0;
  position: relative;
  @media (min-width: 1024px) {
    height: 100px;
    padding: auto;
  }
}
.leftArrow {
  color: #0066ff;
  @media (min-width: 768px) {
    display: none;
  }
}
.change-theme{
  margin: 24px auto auto 0;
  display: block;
}
</style>
