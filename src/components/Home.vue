<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>{{content.hero}}</h1>
        <p>{{content.subHero}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    getContent: function () {
      axios.get("static/json/main.json").then(x=>{
        this.content = x.data.content;
      });
    }
  },
  beforeMount: function(){
    this.getContent();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
