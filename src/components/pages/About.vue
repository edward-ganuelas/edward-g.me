<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <img src="../../assets/profile.jpg" class="profile" alt="Edward Ganuelas" />
        <h2>About Me</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-8">
        <h3>Just some random facts about me</h3>
        <ul>
          <li>My full name is Edward Paulo Nilmar Ganuelas</li>
          <li>Born in Manila, Philippines. Raised in Quezon City, Philippines</li>
          <li>Came to Canada in the year 2005</li>
          <li>First job was at McDonalds. Worked in the kitchen and eventually got promoted to Crew Trainer and Team Leader</li>
          <li>Went to George Brown College for the Computer Programmer Analyst program</li>
          <li>Self diagnosed MBTI type is ISTP</li>
          <li>Thinks that Michael Jordan is the G.O.A.T.</li>
          <li>Loves Video Games</li>
          <li>Loves Pro Wrestling</li>
          <li>Loves Anime/Manga</li>
          <li>Loves bacon</li>
          <li>Started programming as kid because of video games</li>
          <li>Lifts Weights</li>
          <li>Swears that Keto is the best cutting diet</li>
          <li>Favorite Colour is Blue</li>
          <li>Usually wears clothes coloured blue, black, white, purple and even pink</li>
          <li>Thinks phones should always have a headphone jack</li>
          <li>Shoots film photography</li>
          <li>Doesn't get Snapchat</li>
        </ul>
      </div>
    </div>
  </div>
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
img{
  &.profile{
    width: 120px;
    height: 120px;
    border: 1px solid #FFF;
    border-radius: 8px;
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
