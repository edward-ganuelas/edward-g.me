<template>
    <p class="author card-subtitle">{{name}}</p>
</template>

<script>
import axios from "axios";
import { DIRECTUS, AUTHOR } from "../../api/apis";
export default {
  name: "Author",
  props: ["author"],
  data() {
    return {
      name: ""
    };
  },
  methods: {
    getAuthor: async function() {
      let response = await axios.get(`${DIRECTUS}${API.user}${this.author}`);
      this.name =
        response.data.data.first_name + " " + response.data.data.last_name;
      localStorage.setItem(`eightray_author_${this.author}`, this.name);
    }
  },
  beforeMount: function() {
    if (localStorage.getItem(`eightray_author_${this.author}`) === null) {
      this.getAuthor();
    } else {
      this.name = localStorage.getItem(`eightray_author_${this.author}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
