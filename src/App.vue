<template>
  <div id="app">
    <v-app>
      <v-content>
        <header-nav />
      <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import HeaderNav from './components/Header';
export default {
  name: 'app',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Questrial|Raleway');
.application{
  font-family: 'Questrial', sans-serif;
}

</style>
