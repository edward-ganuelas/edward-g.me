<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>{{content.hero}}</h1>
        <p>{{content.subHero}}</p>
      </div>
        <div class="col-12">
          <nav class="">
            <ul>
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
                <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer"><span class='ico'><i class='fab fa-github'></i></span>Github</a>
              </li>
              <li>
                <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderNav",
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
    };
  },
  methods: {
    getContent: function() {
      axios.get("static/json/header.json").then(x => {
        this.content = x.data.content;
      });
    }
  },
  beforeMount: function() {
    this.getContent();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-family: "Raleway", sans-serif;
}
nav {
  white-space: nowrap;
  overflow-x: auto;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    @media (min-width: 1024px) {
      width: 61.8%;
      float: right;
      flex-direction: row;
    }
    li {
      flex: 1 0;
      text-align: center;
      margin: 0 1rem;
      a{
        text-decoration: none;
      }
    }
  }
}
.fab-wrapper{
  padding: 0;
  position: relative;
  @media(min-width: 1024px)
  {
    height: 100px; 
    padding: auto;
  }
}

</style>
