<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12 header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-lg-6">
            <h1>
              <router-link to="/">
                <svg width="200" height="60">
                  <text x="0" y="40">edward-g.me</text>
                </svg>
              </router-link>
              <span>{{content.subHero}}</span>
            </h1>
            <tag-line :tagLine=selectedTagLine />
          </div>
          <div class="col-6 col-lg-2 offset-lg-4">
            <Slide right>
              <router-link to="/"><span class='ico'><i class='fas fa-home'></i></span>Home</router-link>
              <router-link to="/about-me"><span class='ico'><i class='fas fa-user'></i></span>About Me</router-link>
              <router-link to="/photography"><span class='ico'><i class="fas fa-camera-retro"></i></span>Photography</router-link>
              <router-link to="/blog"><span class='ico'><i class="fas fa-file-alt"></i></span>Blog</router-link>
              <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer" @click="tracking('linkedin')"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a>
              <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer" @click="tracking('github')"><span class='ico'><i class='fab fa-github'></i></span>Github</a>
              <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun')">EightRayedSun</a>
              <!-- <theme-selector /> -->
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
import _ from "lodash";
import TagLine from "@/components/TagLine";
// import ThemeSelector from "./ThemeSelector";
import { Slide } from 'vue-burger-menu';
export default {
  name: "HeaderNav",
  components:{
    // ThemeSelector,
    Slide,
    TagLine
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
      tagLines: [],
      selectedTagLine: ""
    };
  },
  methods: {
    getContent: async function() {
      axios.get("static/json/header.json").then(x => {
        this.content = x.data.content;
        this.tagLines = x.data.content.tagLines;
        this.setTagLine();
      });
    },
    tracking(site) {
      this.$ga.event({
        eventCategory: `Clicked ${site}`,
        eventAction: "click"
      });
    },
    setTagLine(){
      this.selectedTagLine = this.tagLines[_.random(0, this.tagLines.length)];
    }
  },
  beforeMount() {
    this.getContent();
    this.$router.afterEach(()=>{
      this.setTagLine();
    });
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
.dark-theme{
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
