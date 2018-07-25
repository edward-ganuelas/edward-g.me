<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <h2>Photography</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <h3>A section about a hobby</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Photography",
  data() {
    return {
      content: "",
      meta: {
          title: "Photography",
          description: "Personal Site of Edward Ganuelas",
          keywords: "developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe"
      }
    };
  },

  methods: {
  
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

</style>
