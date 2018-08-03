<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <h2>Photography</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-8">
        <h3>A section about a hobby</h3>
      </div>
    </div>

    <div class="row photos">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Photos</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>Here's a sample of my photos. To see more checkout my <a href="https://www.instagram.com/mustadio98/" target="_blank" rel="noopener noreferrer">instagram</a>.</p>
  
          </div>
          <div class="col-12">
            <h4>Black and White</h4>
            <masonry>
              <div v-for="image of bnw" v-bind:key="image['index']"><img v-img :src="image['url']" v-bind:class="image['orientation']" /></div>
            </masonry>
          </div>
          <div class="col-12">
            <h4>Colour</h4>
            <masonry>
              <div v-for="image of colour" v-bind:key="image['index']"><img v-img :src="image['url']" v-bind:class="image['orientation']" /></div>
            </masonry>
          </div>
        </div>
      </div>
    </div>

    <div class="row gear">
      <div class="container">
        <div class="row">
           <div class="col-12 col-sm-8">
            <h3>Gear</h3>
           </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm">
            <h4>Cameras</h4>
            <ul>
              <li>Nikon EM (2)</li>
              <li>Nikon FM</li>
              <li>Nikon F4</li>
              <li>Nikon D7000</li>
              <li>Nikon D700</li>
              <li>Fujica GW690</li>
              <li>Yashica Electro</li>
            </ul>
          </div>
          <div class="col-12 col-sm">
            <h4>Lenses</h4>
            <ul>
              <li>Nikkor 28mm f2.8 AI-s</li>
              <li>Nikkor 35mm f2 AF-D</li>
              <li>Nikkor 35mm f1.8G AF-S DX</li>
              <li>Nikon Series E 50mm f1.8</li>
              <li>Micro-Nikkor 55mm f2.8 AI-s</li>
              <li>Helios 44-2</li>
              <li>Nikon Series E 100mm f2.8</li>
              <li>Nikon Series E 70-210mm f4</li>
            </ul>
          </div>
          <div class="col-12 col-sm">
            <h4>Misc</h4>
            <ul>
              <li>Nikon SB-24</li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import images from '../../images/images'
export default {
  name: "Photography",
  data() {
    return {
      content: "",
      meta: {
        title: "Photography",
        description: "Personal Site of Edward Ganuelas",
        keywords:
          "developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe"
      },
      bnw: images['bnw'],
      colour: images['colour']
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
        { name: "description", content: this.meta.description },
        { name: "keywords", content: this.meta.keywords }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4{
  margin: 20px 0;
}
.gear, .photos {
  margin-top: 50px;
}
.photos{
  ul{
    padding-left: 0;
  }
  li{
    list-style-type: none;
    margin-bottom: 20px;
  }
}
img{
  max-width: 100%;
}
</style>
