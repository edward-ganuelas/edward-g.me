<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 subIntro">
          <img src="../../assets/profile.jpg" class="profile" alt="Edward Ganuelas" v-if="false" />
          <h2>About Me</h2>
          <p>Just a little something about me</p>
      </div>
    </div>
    <div class="row">
       <div class="col-12 col-sm-2">
        <nav class="container">
          <ul class="row">
            <li class="col">
              <router-link to="/about-me/">Bio</router-link>
            </li>
            <li class="col">
               <router-link to="/about-me/facts">Facts</router-link>
            </li>
            <li class="col">
              <router-link to="/about-me/music">Music</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <transition name="slideUp" leave-active-class="dissapear">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      meta: {
        title: "About Me",
        description: "Personal Site of Edward Ganuelas",
        keywords:
          "developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe"
      }
    };
  },

  methods: {},
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
        {
          name: "description",
          content: this.meta.description,
          id: "description"
        },
        { name: "keywords", content: this.meta.keywords, id: "keywords" }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin-top: 18px;
}
img {
  &.profile {
    width: 120px;
    height: 120px;
    border: 1px solid #fff;
    border-radius: 8px;
    margin-bottom: 16px;
  }
}
h2,
h3 {
  margin-bottom: 20px;
}
ul {
  padding-left: 16px;
  li {
    margin-bottom: 8px;
  }
}
nav ul {
  li {
    list-style-type: none;
    border-right: 1px solid #0066ff;
    text-align: center;
    &:last-of-type {
      border-right: none;
    }
    a {
      &.router-link-exact-active {
        text-decoration: underline;
        color: #212529;
        cursor: default;
      }
    }
    
  }
  @media (min-width: 768px){
      display: inline;
      padding-left: 0;
      li{
        border-right: none;
      }
  }
}
</style>
