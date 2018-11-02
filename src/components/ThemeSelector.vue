<template>
  <div class="themeSelector">
    <div class="btn-group" role="group" aria-label="Select Your Theme">
      <button type="button" class="btn btn-light" @click="changeTheme('light')">Light</button>
      <button type="button" class="btn btn-dark" @click="changeTheme('dark')">Dark</button>
    </div>
  </div>
</template>

<script>
import {sync} from 'vuex-pathify';
export default {
  name: 'ThemeSelector',
  computed:{
    darkTheme: sync('DarkTheme')
  },
  data(){
    return{
      show: false
    }
  },
  methods: {
    changeTheme(theme){
      switch(theme){
        case 'light':
          this.darkTheme = false;
          break;
        case 'dark':
          this.darkTheme = true;
          break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.themeSelector{
  margin: 0 auto;
  width: 50%;
  text-align: center;
}
</style>
