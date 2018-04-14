<template>
  <v-container>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      content: "",
      meta: {
          title: "About Me",
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
