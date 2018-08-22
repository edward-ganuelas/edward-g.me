<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-7 main-content">
        <p>Hello, my name is Edward Paulo Ganuelas and this is my personal site.</p>
        <p>For those who are wondering, what is the purpose of this site? Well the purpose is that this site would focus more
          on Edward the person more than Edward the developer. My hobbies, photographs, personal blog and small things about me would be found here.</p>
        <p>If you are interested to know more about Edward the developer, checkout my other site <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a> or my <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer">Github</a> page.</p>
        <!-- <p>There is nothing much here right now, but I plan to do a lot of rolling updates soon!</p>
        <p>You can follow the development of this site on it's Github <a href="https://github.com/edward-ganuelas/edward-g.me" target="_blank" rel="noopener noreferrer">repo.</a></p>
        <p>You can also checkout my other site, <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a> or my development 
        <a href="https://blog.eightrayedsun.com/#/" target="_blank" rel="noopener noreferrer">blog.</a></p>
        <p>Thank you, and check back soon!</p> -->
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="container">
           <blog-widget />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="container">
          <development-news />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="container">
          <about-widget />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="container">
           <quotes-widget />
        </div>
      </div>
    </div>
   
    
    
   
  </div>
</template>

<script>
import axios from "axios";
import AboutWidget from './AboutWidget';
import QuotesWidget from './QuotesWidget';
import DevelopmentNews from './DevelopmentNews';
import BlogWidget from './BlogWidget';
export default {
  name: "Home",
  components: {
    AboutWidget,
    QuotesWidget,
    DevelopmentNews,
    BlogWidget
  },
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
        { name: "description", content: this.meta.description, id: 'description' },
        { name: "keywords", content: this.meta.keywords, id: 'keywords' }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-content{
  margin-bottom: 18px;
  @media(min-width: 1024px){
    padding-top: 120px;
  }
}
</style>
