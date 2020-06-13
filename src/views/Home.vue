<template>
    <div class="container">
        <div class="row">
            <div class="col-10 offset-1 offset-md-0 col-md-6 card sub-card shadow">
                <div v-if="latestPersonalPost">
                    <blog-widget :post="latestPersonalPost" />
                    <spinner :spin="spin" />
                </div>
            </div>
            <div class="col-10 offset-1 col-md-6 offset-md-0 card sub-card shadow">
                <div v-if="latestTechPost">
                    <development-news :post="latestTechPost" />
                    <spinner :spin="spin" />
                </div>
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
            spin: false
        };
    },
    methods: {
        async getAllPosts() {
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
            const personalPosts = this.personalPosts;
            return _.orderBy(personalPosts, (o) => moment(o.publish_date, 'YYYY-MM-D').unix(), ['desc'])[0];
        },
        latestTechPost() {
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
    margin-top: 18px;
    margin-bottom: 18px;
}
.sub-card{
    padding: 0;
    height: 100vh;
    max-height: 50vh;
    margin-bottom: 2px;     
    & > * {
        height: 100%;
        width: 90%;
        margin: 0 auto;
    }
    margin-bottom: 18px;
    @media (min-width: 768px) {
        margin-bottom: 0;
        max-height: 400px;
    }
}
</style>
