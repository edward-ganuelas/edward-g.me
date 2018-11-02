<template>
  <div class="themeSelctor">
    
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
