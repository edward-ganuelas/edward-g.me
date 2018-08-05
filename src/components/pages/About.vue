<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <img src="../../assets/profile.jpg" class="profile" alt="Edward Ganuelas" v-if="false" />
        <h2>About Me</h2>
        <p>Just a little something about me</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-8">
        <nav class="container">
          <ul class="row">
            <li class="col">
              <router-link to="/about-me/">Bio</router-link>
            </li>
            <li class="col">
               <router-link to="/about-me/facts">Facts</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import about from '../../copy/about';
export default {
  name: "About",
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
nav ul{
  li{
    list-style-type: none;
    border-right: 1px solid #0066FF;
    text-align: center;
    &:last-of-type{
      border-right: none;
    }
  }
}
</style>
