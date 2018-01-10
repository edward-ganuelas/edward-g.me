<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>{{content.hero}}</h1>
        <p>{{content.subHero}}</p>
      </v-flex>
      <v-flex xs12>
        <nav>
          <ul class="hidden-sm-and-down">
            <li v-for="nav in navigation" v-bind:key="nav.label">
              <router-link :to="nav.to">{{nav.label}}</router-link>
            </li>
          </ul>
          <v-card-text style="height: 100px; position: relative" class="hidden-md-and-up">
            <v-btn
              absolute
              dark
              fab
              small
              top
              right
              color="blue accent-3"
              @click.stop="drawer = !drawer"
            >
              <v-icon>list</v-icon>
            </v-btn>
          </v-card-text>
          <v-navigation-drawer temporary
            v-model="drawer"
            light
            absolute class="hidden-md-and-up"
            >
            <v-toolbar flat>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title class="title">
                    Navigation
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense class="pt-0" >
              <v-list-tile v-for="nav in navigation" v-bind:key="nav.label">
                <v-list-tile-content>
                  <v-list-tile-title><router-link :to="nav.to">{{nav.label}}</router-link></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        </nav>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderNav",
  data() {
    return {
      content: "",
      navigation: {
        home: {
          label: "Home",
          to: "/"
        },
        about: {
          label: "About Me",
          to: ""
        },
        skills: {
          label: "Skills/Experience",
          to: ""
        },
        blog: {
          label: "Blog",
          to: ""
        },
        linkedin: {
          label: "Linkedin",
          to: "/linkedin"
        },
        github: {
          label: "Github",
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
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
      width: 61.8%;
      float: right;
      flex-direction: row;
    }
    li {
      flex: 1 0;
      text-align: center;
    }
  }
}
</style>
