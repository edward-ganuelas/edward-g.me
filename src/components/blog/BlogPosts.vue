<template>
    <div class="posts">
        <div class="container" v-if="this.savedPost !== ''">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2">
                    <blog-filters :savedTags=savedTags />
                </div>
                <div class="col-12 col-md-8 offset-md-2"> 
                    <carousel-3d :loop="false" height="350" width="350" :controlsVisible="true" :count="orderedPosts.length">
                        <slide v-for="(post, index) in orderedPosts" v-bind:key="post.id" :index="index">
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="headline card-title">{{post.title}}</h2>
                                    <author v-bind:authorId="post.created_by" v-if="post.created_by" />
                                    <p v-if="post.published_date">
                                        Published on {{publishedDate(post.published_date)}}
                                    </p>
                                    <ul v-if="getPostTags(post.id)" class="tags">
                                        <li>Tags:</li>
                                        <li v-for="tag in getPostTags(post.id)" :key="tag.id">
                                            {{convertTagIdToTag(tag.tags_id)}}
                                        </li>
                                    </ul>
                                    <blockquote class="card-text">{{post.excerpt}}</blockquote>
                                    <router-link :to="{name: 'Post', params: { title: kebabTitle(post.title) }, query: { id: post.id } }">{{$t('common.readMore')}}</router-link>
                                </div>
                            </div>
                        </slide>
                    </carousel-3d>
                </div>
            </div>
            <spinner :spin="spin" />
        </div>
    </div>
</template>

<script setup>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import BlogFilters from '@/components/blog/BlogFilters.vue';
import Author from '@/components/blog/Author.vue';
import _ from 'lodash';
import moment from 'moment';
import Spinner from '@/components/Spinner.vue';
import { useBlog } from '@/composables/useBlog'
import { useApplicationStore } from '@/store/useApplicationStore';

import { ref, computed, onBeforeMount } from 'vue';

const { blogPosts, blogTags, tags, getPosts, getBlogTags, getTags } = useBlog();
const store = useApplicationStore()

const spin = ref(false);

function getPostTags(postId) {
    if (!blogTags._.value()) {
        return;
    }
    const blogTags = _.cloneDeep(blogTags.value);

    return blogTags.filter(blogTag => blogTag.blog_id === postId);
}

function convertTagIdToTag(tagId) {
    const tags = _.cloneDeep(tags.value);
    if (!tags) {
        return;
    }
    return _.startCase(tags.find(tag => tag.id === tagId)['tag']);
}

function publishedDate(published_date) {
    return moment(published_date).format('MMM D YYYY');
}
function filterClicked(data) {
    store.filter = data;
}

// function resetPosts() {
//     Object.assign(this.posts, this.orderedPosts.slice());
// }

function kebabTitle(title) {
    return _.kebabCase(title);
}

const filter = computed(() => store.filter);

const filteredPosts = computed(() => {
    if (filter.value === '') {
        return blogPosts;
    }
    const savedBlogTags = _.cloneDeep(blogTags.value);
    const filteredBlogTags = savedBlogTags.filter(blogTag => blogTag.tags_id === filter.value)
        .map(blogTag => blogTag.blog_id);
    return _.cloneDeep(blogPosts).filter(post => _.includes(filteredBlogTags, post.id));
});

const orderedPosts = computed(() => {
    return _.sortBy(filteredPosts.value, (post) => {
        return new Date(post.published_date);
    }).reverse();
});

onBeforeMount(async () => {
    blogPosts.value = await getPosts();
    blogTags.value = await getBlogTags();
    savedTags.value = await getTags();
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.posts {
    width: 100%;
}
ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    width: 100%;
    li {
        display: inline-block;
        margin-right: 10px;
        &:first-child {
            margin-left: 18px;
        }
    }
}
.tags {
    li {
        font-style: italic;
        &:first-child {
            margin-left: 0;
        }
    }
}
.card__actions {
    .btn {
        margin-left: 18px;
    }
}
.card {
    margin-bottom: 18px;
}
.carousel-3d-slider {
    .card {
        border: none;
    }
}
</style>
