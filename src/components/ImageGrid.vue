<template>
    <transition name="fade" leave-active-class="dissapear">
        <div class="row" v-show="toggle === activeClass">
            <div class="col-12">  
                <h4>{{title}}</h4>
                <label class="sort">Order By:
                    <select v-model="sort">
                        <option value="old">Oldest at Top</option>
                        <option value="new">Newest at Top</option>
                        <option value="random">Random</option>
                    </select>
                </label>
                <masonry :cols="2" :gutter="0">
                    <div v-for="image of grid" v-bind:key="image['index']">
                        <img v-img="{'title': image['title']}" :src="image['url']" :alt="image['title']" v-bind:class="image['orientation']" />
                    </div>
                </masonry>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" :disabled="this.gridSize == this.numberOfImages" @click="addGridSize">See More Images ({{remainingImages}})</button>
            </div>
        </div>
    </transition>
</template>

<script>
import _ from "lodash";
export default {
    name: "ImageGrid",
    props: ["images", "title", "toggle", "activeClass"],
    data() {
        return {
            gridSize: 8,
            sort: "old"
        };
    },
    methods: {
        addGridSize() {
            this.gridSize += 4;
            if (this.gridSize > this.numberOfImages) {
                this.gridSize = this.numberOfImages;
            }
            this.$ga.event({
                eventCategory: `Load More ${this.toggle}`,
                eventAction: "click",
            });
        }
    },
    computed: {
        numberOfImages() {
            return _.size(this.images);
        },
        shuffleImages() {
            return _.shuffle(this.images);
        },
        remainingImages() {
            return this.numberOfImages - this.gridSize;
        },
        sortedImages() {
            if(this.sort !== 'random'){
                let images = this.images.slice();
                return images.sort((a,b) => {
                    if(this.sort === 'old'){
                        return a.id - b.id;
                    }else if(this.sort === 'new'){
                        return b.id - a.id;
                    }
                });
            }else{
                return this.shuffleImages;
            }
        },
        grid() {
            return _.slice(this.sortedImages, 0, this.gridSize);
        }
    },
    watch: {
        sort(newVal){
            this.$ga.event({
                eventCategory: `Switch Sort to ${newVal} from ${this.title}`,
                eventAction: "Switch",
            });
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
button {
    margin: 50px auto;
    display: block;
}
.sort{
    margin-bottom: 18px;
}
.dark-theme{
    .btn.btn-primary{
        background-color: #1900ff;
        border-color: #1900ff;
        color: #C0C0C0;
    }
}
</style>
