<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm7 offset-sm5 class="main-content">
        <p>Hello, my name is Edward Paulo Ganuelas and this is my personal site.</p>
        <p>There is nothing much here right now, but I plan to do a lot of rolling updates soon!</p>
        <p>You can follow the development of this site on it's Github <a href="https://github.com/edward-ganuelas/edward-g.me" target="_blank" rel="noopener noreferrer">repo.</a></p>
        <p>You can also checkout my other site, <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a> or my development 
        <a href="https://blog.eightrayedsun.com/#/" target="_blank" rel="noopener noreferrer">blog.</a></p>
        <p>Thank you, and check back soon!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      content: "",
      meta: {
          title: "Home",
          description: "Personal Site of Edward Ganuelas",
          keywords: "developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe"
      }
    };
  },

  methods: {
    getContent: function() {
      axios.get("static/json/main.json").then(x => {
        this.content = x.data.content;
      });
    }
  },
  beforeMount: function() {
    // this.getContent();
  },
  head: {
    title: function() {
      return {
        inner: this.meta.title
      };
    },
    meta: function() {
      return [
        { name: "description", content: this.meta.description },
        { name: "keywords", content: this.meta.keywords }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-content{
  @media(min-width: 1024px){
    padding-top: 120px;
  }
}
</style>
