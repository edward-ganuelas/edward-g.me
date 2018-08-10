<template>
  <div class="row photos">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3><i class="fas fa-images"></i> Photos</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>Here's a sample of my photos. These were primarily shot in film. To see more checkout my <a href="https://www.instagram.com/mustadio98/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> Instagram</a>.</p>
  
          </div>
          <div class="col-12">
            <div class="btn-group btn-group-toggle">
              <label class="btn bnw btn-secondary" v-bind:class="{active: toggle === 'bnw'}">
                <input type="radio" name="options" id="bnw" autocomplete="off" v-model="toggle" value="bnw"> Black and White
              </label>
              <label class="btn colour btn-secondary" v-bind:class="{active: toggle === 'colour'}">
                <input type="radio" name="options" id="colour" autocomplete="off" v-model="toggle" value="colour"> Colour
              </label>
            </div>
          </div>
          <transition name="fade" leave-active-class="dissapear">
            <div class="col-12" v-show="toggle === 'bnw'">  
              <h4>Black and White</h4>
              <masonry>
                <div v-for="image of bnw" v-bind:key="image['index']"><img v-img="{'title': image['title']}" :src="image['url']" :alt="image['title']" v-bind:class="image['orientation']" /></div>
              </masonry>
            </div>
          </transition>
          <transition name="fade" leave-active-class="dissapear">
            <div class="col-12" v-show="toggle === 'colour'">
              <h4>Colour</h4>
              <masonry>
                <div v-for="image of colour" v-bind:key="image['index']"><img v-img="{'title': image['title']}" :src="image['url']" :alt="image['title']" v-bind:class="image['orientation']" /></div>
              </masonry>
            </div>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
import images from "../../../images/images";
export default {
  name: "Photos",
  data() {
    return {
      bnw: images["bnw"],
      colour: images["colour"],
      toggle: "bnw"
    };
  },

  methods: {},
  beforeMount: function() {
    // this.getContent();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4 {
  margin: 20px 0;
}
img {
  max-width: 100%;
}
.btn.bnw {
  &.active {
    background-color: #000;
    color: #fff;
  }
}
.btn.colour {
  &.active {
    background-color: #0066ff;
    color: #ff9900;
  }
}
</style>
