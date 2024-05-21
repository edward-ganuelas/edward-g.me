<template>
    <div class="container main-content">
        <div class="row" v-if="latestPersonalPost">
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12 card col-lg-9 offset-lg-2 sub-card shadow">
                            <div v-if="latestPersonalPost">
                                <blog-widget :post="latestPersonalPost" />
                                <spinner :spin="spin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="latestTechPost">
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-9 offset-lg-2 card sub-card shadow">
                            <div v-if="latestTechPost">
                                <development-news :post="latestTechPost" />
                                <spinner :spin="spin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="disableBlog === true">
            <div class="col-12 blog-disabled">
                <p>The blog is currently disabled</p>
            </div>
        </div>
    </div>
</template>

<script>
import DevelopmentNews from '@/components/DevelopmentNews';
import BlogWidget from '@/components/BlogWidget';
import Spinner from '@/components/Spinner';
import moment from 'moment';
import _ from 'lodash';
import client from '@/directus';

const BLOG_TYPES = Object.freeze({
    TECH: 'tech',
    PERSONAL: 'personal'
});

export default {
    name: 'Home',
    components: {
        DevelopmentNews,
        BlogWidget,
        Spinner
    },
    data() {
        return {
            content: '',
            meta: {
                title: 'Home',
                description: 'Personal Site of Edward Ganuelas',
                keywords: 'developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe',
            },
            blogPosts: undefined,
            spin: false,
            disableBlog: true,
            disableTechPost: true
        };
    },
    methods: {
        async getAllPosts() {
            if (this.disableBlog) {
                return
            }
            this.spin = true;
            const response = await client.getItems('blog');
            this.blogPosts = Object.freeze(response.data);
            this.spin = false;
        }
    },
    computed: {
        personalPosts() {
            if (!_.isObject(this.blogPosts)){
                return;
            }
            const blogPosts = _.cloneDeep(this.blogPosts);
            return blogPosts.filter(post => post.blog_type === BLOG_TYPES.PERSONAL);
        },
        techPosts() {
            if (!_.isObject(this.blogPosts)){
                return;
            }
            const blogPosts = _.cloneDeep(this.blogPosts);
            return blogPosts.filter(post => post.blog_type === BLOG_TYPES.TECH);
        },
        latestPersonalPost() {
            if (this.disableBlog) {
                return null
            }
            const personalPosts = this.personalPosts;
            return _.orderBy(personalPosts, (o) => moment(o.publish_date, 'YYYY-MM-D').unix(), ['desc'])[0];
        },
        latestTechPost() {
            if (this.disableTechPost) {
                return null
            }
            const techPosts = this.techPosts;
            return _.orderBy(techPosts, (o) => moment(o.publish_date, 'YYYY-MM-D').unix(), ['desc'])[0];
        }
    },
    head: {
        title() {
            return {
                inner: this.meta.title
            };
        },
        meta() {
            return [
                { name: 'description', content: this.meta.description, id: 'description' },
                { name: 'keywords', content: this.meta.keywords, id: 'keywords' }
            ];
        }
    },
    async beforeMount() {
        await this.getAllPosts();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-content {
    margin-top: 32px;
    flex: 0 1 auto;
    align-self: center;
    > .row {
        margin-bottom: 18px;
    }
    @media (min-width: 1024px) {
        margin-top: 0;
    }
}
.sub-card{
    padding: 0;
    margin-bottom: 2px;     
    display: flex;
    align-items: baseline;
    flex-direction: row;
    & > * {
        flex: 0 1 auto;
        width: 100%;
        padding: 15px;
        align-self: center;
        @media (min-width: 768px) {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
    margin-bottom: 18px;
    @media (min-width: 768px) {
        margin-bottom: 0;
        max-height: 400px;
        height: 100vh;
    }
}
.blog-disabled {
    text-align: center;
}
</style>
