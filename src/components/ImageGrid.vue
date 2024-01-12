<template>
    <div class="row">
        <div class="col-12 col-md-8 offset-md-2">  
            <h4>{{images.title}}</h4>
            <p>{{$t('imageGrid.orderBy')}}</p>
            <button class="btn btn-primary sort" @click="setSort(sortChoices.old)"><i class="fas fa-sort-numeric-up"></i> {{$t('imageGrid.old')}}</button>
            <button class="btn btn-primary sort" @click="setSort(sortChoices.new)"><i class="fas fa-sort-numeric-up"></i> {{$t('imageGrid.new')}}</button>
            <button class="btn btn-primary sort" @click="setSort(sortChoices.random)"><i class="fas fa-random"></i> {{$t('imageGrid.random')}}</button>
            <div v-for="image of grid" v-bind:key="image['index']">
                <img :src="image['url']" :alt="image['title']" v-bind:class="image['orientation']" />
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary loadMore" :disabled="this.gridSize == this.numberOfImages" @click="addGridSize">{{$t('imageGrid.seeMore')}} ({{remainingImages}})</button>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

const DEFAULT_SORT = 'old';

export default {
    name: 'ImageGrid',
    props: {
        images: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            gridSize: 8,
            sort: DEFAULT_SORT,
            isImagesShuffled: false,
            sortChoices: Object.freeze({
                old: 'old',
                new: 'new',
                random: 'random'
            })
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
                eventAction: 'click',
            });
        },
        setSort(sort) {
            this.sort = DEFAULT_SORT;
            this.sort = sort;
        }
    },
    computed: {
        numberOfImages() {
            return _.size(this.images.images);
        },
        remainingImages() {
            const remainingImages = this.numberOfImages - this.gridSize;
            return remainingImages < 0 ? 0 : remainingImages;
        },
        sortedImages() {
            if (this.sort === this.sortChoices.random) {
                return !_.isEmpty(this.images.images) ? _.shuffle(this.images.images) : [];
            }
            const images = !_.isEmpty(this.images.images) ? this.images.images.slice() : [];
            return images.sort((a,b) => {
                if (this.sort === 'old') {
                    return a.id - b.id;
                } else if(this.sort === 'new') {
                    return b.id - a.id;
                }
            });
        },
        grid() {
            return _.slice(this.sortedImages, 0, this.gridSize);
        }
    },
    watch: {
        sort(newVal){
            this.$ga.event({
                eventCategory: `Switch Sort to ${newVal} from ${this.title}`,
                eventAction: 'Switch',
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
label {
    margin-right: 1rem;
}
.sort {
    margin-right: 1rem;
    margin-bottom: 1rem;
}
.loadMore {
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
