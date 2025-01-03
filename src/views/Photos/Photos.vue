<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">Photos</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2" v-html="$t('photography.photos.content')">
            </div>
            <div class="col-4 col-md-4 offset-md-4">
                <div class="btn-group btn-group-toggle">
                    <label class="btn bnw btn-secondary" v-bind:class="{active: toggle === 'bnw'}">
                    <input type="radio" name="options" id="bnw" autocomplete="off" v-model="toggle" value="bnw"> 
                        {{$t('photography.photos.bnw')}}
                    </label>
                    <label class="btn colour btn-secondary" v-bind:class="{active: toggle === 'colour'}">
                    <input type="radio" name="options" id="colour" autocomplete="off" v-model="toggle" value="colour"> 
                        {{$t('photography.photos.colour')}}
                    </label>
                </div>
            </div>
        </div>
        <transition name="fade" leave-active-class="dissapear" appear>
            <image-grid :images="bnw" v-if="toggle === DEFAULT_TOGGLE" activeClass="bnw" key="bnw" />
            <image-grid :images="colour" v-else activeClass="colour" key="colour" />
        </transition>
    </div>
</template>

<script>
import ImageGrid from '@/components/ImageGrid.vue';
import client from '@/directus';
import _ from 'lodash';
import { event } from 'vue-gtag';

const DEFAULT_TOGGLE = 'bnw';

export default {
    name: 'Photos',
    components: {
        ImageGrid
    },
    data() {
        return {
            bnw: {
                images: [],
                title: this.$t('photography.photos.bnw'),
            },
            colour: {
                images: [],
                title: this.$t('photography.photos.colour')
            },
            DEFAULT_TOGGLE,
            toggle: DEFAULT_TOGGLE
        };
    },
    methods:{
        instagram() {
            event('toggle', {
                eventCategory: `Instagram`,
                eventAction: 'click'
            });
        },
        async getImages() {
            const images = await client.getItems('photos');
            const groupedImages = _.groupBy(images.data, image => image.category);
            this.bnw.images = groupedImages.bnw
            this.colour.images = groupedImages.colour;
        }
    },
    watch:{
        toggle(newVal) {
            event('toggle', {
                eventCategory: `Toggle ${newVal}`,
                eventAction: 'click'
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
