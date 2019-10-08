<template>
    <div class="col-12 col-sm-10 photos">
        <div class="container">
            <div class="row">
                <div class="col-12">
                <h3><i class="fas fa-images"></i> Photos</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <p>Here's a sample of my photos. These were primarily shot in film and I will keep adding to this list. To see more checkout my <a href="https://www.instagram.com/mustadio98/" target="_blank" rel="noopener noreferrer" @click="instagram"><i class="fab fa-instagram"></i> Instagram</a>.</p>
                </div>
                <div class="col-12">
                <div class="btn-group btn-group-toggle">
                    <label class="btn bnw btn-secondary" v-bind:class="{active: toggle === 'bnw'}">
                    <input type="radio" name="options" id="bnw" autocomplete="off" v-model="toggle" value="bnw"> 
                        Black and White
                    </label>
                    <label class="btn colour btn-secondary" v-bind:class="{active: toggle === 'colour'}">
                    <input type="radio" name="options" id="colour" autocomplete="off" v-model="toggle" value="colour"> 
                        Colour
                    </label>
                </div>
                </div>
            </div>
            <image-grid :images="bnw" :toggle="toggle" title="Black and White" activeClass="bnw" />
            <image-grid :images="colour" :toggle="toggle" title="Colour" activeClass="colour" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ImageGrid from "@/components/ImageGrid";

export default {
    name: "Photos",
    components: {
        ImageGrid
    },
    data() {
        return {
            bnw: [],
            colour: [],
            toggle: "bnw"
        };
    },
    methods:{
        instagram() {
            this.$ga.event({
                eventCategory: `Instagram`,
                eventAction: "click"
            });
        },
        async getImages() {
            const images = await axios.get('https://eightray.sfo2.digitaloceanspaces.com/json/images.json');
            this.bnw = images.data.content.bnw;
            this.colour = images.data.content.colour;
        }
    },
    watch:{
        toggle(newVal) {
            this.$ga.event({
                eventCategory: `Toggle ${newVal}`,
                eventAction: "click"
            });
        }
    },
    beforeMount() {
        this.getImages();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.photos {
  margin-bottom: 150px;
}
</style>
