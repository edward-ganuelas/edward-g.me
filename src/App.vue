<template>
  <div id="app">
    <header-nav />
      <transition :name="transition" leave-active-class="dissapear">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import HeaderNav from "./components/Header";
import _ from "lodash";
export default {
  name: "app",
  components: {
    HeaderNav
  },
  data() {
    return {
      transitions: ["slideLeft", "fadeRight", "bounceDown", "zoom", "fadeUp"],
      transition: ''
    };
  },
  computed:{

  },
  methods: {
    changeTransition(){
      this.transition = this.transitions[this.getRandomNumber()];
    },
    getRandomNumber(){
      return _.random(0,4);
    }
  },
  mounted(){
    this.changeTransition();
    this.$router.afterEach((to, from) =>{
      this.changeTransition()
    })
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Questrial|Raleway");
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
html, body{
  font-size: 85%;
  @media (min-width: 768px){
    font-size: 90%;
  }
  @media(min-width: 1024px){
    font-size: 100%;
  }
}
.application {
  font-family: "Questrial", sans-serif;
}
.dissapear {
  display: none;
}
span.ico {
  margin-right: 8px;
}
</style>
