<template>
  <div id="app">
    <header-nav />
      <transition name="slideLeft" leave-active-class="dissapear">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import HeaderNav from "./components/Header";
export default {
  name: "app",
  components: {
    HeaderNav
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Questrial|Raleway");
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
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
