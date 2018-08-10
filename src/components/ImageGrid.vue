<template>
  <transition name="fade" leave-active-class="dissapear">
      <div class="col-12" v-show="toggle === activeClass">  
        <h4>{{title}}</h4>
        <masonry>
          <div v-for="image of images" v-bind:key="image['index']"><img v-img="{'title': image['title']}" :src="image['url']" :alt="image['title']" v-bind:class="image['orientation']" /></div>
        </masonry>
      </div>
  </transition>
</template>

<script>
import _ from "lodash";
export default {
  name: "ImageGrid",
  props: ['images', 'title', 'toggle', 'activeClass'],
  data() {
    return {
    };
  },
  methods: {
    
  },
  computed:{
    numberOfImages(){
      return _.size(this.images);
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-width: 100%;
}
h4 {
  margin: 20px 0;
}
</style>
