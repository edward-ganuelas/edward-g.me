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
                                    <author v-bind:author="post.author" v-if="post.author" />
                                    <p v-if="post.published_date">
                                        Published on {{publishedDate(post.published_date)}}
                                    </p>
                                    <ul v-if="getPostTags(post.id)" class="tags">
                                        <li>Tags:</li>
                                        <li v-for="tag in getPostTags(post.id)" :key="tag.id">
                                            {{tag.tag}}
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

<script>
import mixin from '@/mixins/mixin';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import BlogFilters from './BlogFilters';
import Author from './Author';
import _ from 'lodash';
import moment from 'moment';
import { get, sync } from 'vuex-pathify';
import Spinner from '@/components/Spinner';

export default {
    name: 'blog-posts',
    mixins: [mixin],
    data() {
        return {
            spin: false
        };
    },
    components: {
        Author,
        BlogFilters,
        Spinner,
        Carousel3d,
        Slide
    },
    methods: {
        getPostTags(postId) {
            if (!this.savedBlogTags) {
                return;
            }
            const blogTags = _.cloneDeep(this.savedBlogTags);
            
            return blogTags.filter(blogTag => blogTag.blog_id === postId);
        },
        convertTagIdToTag(tagId) {
            const tags = _.cloneDeep(this.savedTags);
            if (!tags) {
                return;
            }
            return tags.find(tag => tag.id === tagId)['tag'];
        },
        publishedDate(published_date) {
            return moment(published_date).format('MMM D YYYY');
        },
        filterClicked(data) {
            this.filter = data;
        },
        resetPosts() {
            this.posts = this.originalPosts.slice();
        },
        kebabTitle(title) {
            return _.kebabCase(title);
        }
    },
    computed: {
        orderedPosts() {
            return _.sortBy(this.filteredPosts, (x) => {
                return new Date(x.published_date);
            }).reverse();
        },
        savedPost: sync('BlogPosts'),
        filter: get('Filter'),
        filteredPosts() {
            if (this.filter === '') {
                return this.savedPost;
            }
            const savedBlogTags = _.cloneDeep(this.savedBlogTags);
            const filteredBlogTags = savedBlogTags.filter(blogTag => blogTag.tags_id === this.filter)
                .map(blogTag => blogTag.blog_id);
            return _.cloneDeep(this.savedPost).filter(post => _.includes(filteredBlogTags, post.id));
        }
    },
    watch: {
        filtereas(value) {
            this.resetPosts();
            let filteredPosts = this.savedPost;
            if (value !== 'clear') {
                filteredPosts = filteredPosts.filter((x) => {
                    let filterCheck = false;
                    x['personal-tags'].data.forEach((element) => {
                        if (element.tag === value) {
                            filterCheck = true;
                        }
                    });
                    return filterCheck;
                });
            }
            this.posts = filteredPosts;
        }
    },
    async beforeMount() {
        await this.getPosts();
        await this.getBlogTags();
        await this.getTags();
    }
};
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
