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

<script setup>
import DevelopmentNews from '@/components/DevelopmentNews.vue';
import BlogWidget from '@/components/BlogWidget.vue';
import Spinner from '@/components/Spinner.vue';
import moment from 'moment';
import _ from 'lodash';
import client from '@/directus';

import { ref, computed, onBeforeMount } from 'vue';

const BLOG_TYPES = Object.freeze({
    TECH: 'tech',
    PERSONAL: 'personal'
});

const content = ref('');
const meta =  {
    title: 'Home',
    description: 'Personal Site of Edward Ganuelas',
    keywords: 'developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe',
};
const blogPosts = ref({});
const spin = ref(false);
const disableBlog = ref(true);
const disableTechPost = ref(true);

async function getAllPosts() {
    if (disableBlog.value === true) {
        return;
    }
    spin.value = true;
    const response = await client.getItems('blog');
    blogPosts.value = Object.freeze(response.data);
    spin.value = false;
}

const personalPosts = computed(() => {
    if (!_.isObject(blogPosts.value)){
        return;
    }
    const blogPosts = _.cloneDeep(blogPosts.value);
    return blogPosts.filter(post => post.blog_type === BLOG_TYPES.PERSONAL);
});
const techPost = computed(() => {
    if (!_.isObject(blogPosts.value)){
        return;
    }
    const blogPosts = _.cloneDeep(blogPosts.value);
    return blogPosts.filter(post => post.blog_type === BLOG_TYPES.TECH);
});
const latestPersonalPost = computed(() =>{
    if (disableBlog.value === true) {
        return null;
    }
    const personalPosts = personalPosts.value;
    return _.orderBy(personalPosts, (o) => moment(o.publish_date, 'YYYY-MM-D').unix(), ['desc'])[0];
});
const latestTechPost = computed(() => {
    if (disableTechPost.value === true) {
        return null;
    }
    const techPosts = techPosts.value;
    return _.orderBy(techPosts, (o) => moment(o.publish_date, 'YYYY-MM-D').unix(), ['desc'])[0];
})

const head = computed(() => {
    return {
        title() {
            return {
                inner: meta.title
            };
        },
        meta() {
            return [
                { name: 'description', content: meta.description, id: 'description' },
                { name: 'keywords', content: meta.keywords, id: 'keywords' }
            ];
        }
    }
})

onBeforeMount(async () => {
    await getAllPosts();
})
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
