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
      transition: ""
    };
  },
  computed: {},
  methods: {
    changeTransition() {
      this.transition = this.transitions[this.getRandomNumber()];
    },
    getRandomNumber() {
      return _.random(0, 4);
    }
  },
  mounted() {
    this.changeTransition();
    this.$router.afterEach((to, from) => {
      this.changeTransition();
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Questrial|Raleway");
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
@import "./node_modules/bootstrap/scss/_buttons.scss";
@import "./node_modules/bootstrap/scss/_button-group.scss";
@import "./node_modules/bootstrap/scss/_card.scss";
html,
body {
   font-family: "Questrial", sans-serif;
  font-size: 85%;
  color: #212529;
  @media (min-width: 768px) {
    font-size: 90%;
  }
  @media (min-width: 1024px) {
    font-size: 100%;
  }
}
h1,
h2,
h3,
h4 {
  font-family: "Raleway", sans-serif;
}
a {
  color: #0066ff;
}
// .application {
//   font-family: "Questrial", sans-serif;
// }
.dissapear {
  display: none;
}
span.ico {
  margin-right: 8px;
}
.btn {
  border-radius: 15px;
}
.shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
.card{
  padding: 25px 0;
}
</style>
