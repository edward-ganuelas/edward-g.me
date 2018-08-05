<template>
      <div class="col-12 col-sm-8">
        <ul>
          <li v-for="(copy, index) in content" v-bind:key="index">{{copy}}</li>
        </ul>
      </div>
</template>

<script>
import about from '../../../copy/about';
export default {
  name: "Facts",
  data() {
    return {
      content: about,
      meta: {
          title: "About Me",
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
        { name: "description", content: this.meta.description, id: 'description' },
        { name: "keywords", content: this.meta.keywords, id: 'keywords' }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  &.profile{
    width: 120px;
    height: 120px;
    border: 1px solid #FFF;
    border-radius: 8px;
    margin-bottom: 16px;
  }
}
h2, h3{
  margin-bottom: 20px;
}
ul{
padding-left: 16px;
  li{
    margin-bottom: 8px;    
  }
}
</style>
