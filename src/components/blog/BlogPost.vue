<template>
    <div class="blog-post">
        <div class="container" v-if="post !== ''">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2 card shadow">
                    <div class="card-body">
                        <h2>{{post.title}}</h2>
                        <author v-bind:authorId="post.created_by" v-if="post.created_by" />
                        <p v-if="post.publish_date">{{$t('blog.publishedOn')}} {{publishedDate(post.publish_date)}}</p>
                        <div v-html="post.post"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <router-link to="/blog"><i class="fas fa-caret-left"></i> {{$t('common.back')}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment';
import client from '@/directus';
import Author from '@/components/blog/Author.vue';
import _ from 'lodash';
import { pageview } from 'vue-gtag';
import { useBlog } from '@/composables/useBlog'

const { blogPosts, blogTags, tags, getPosts, getBlogTags, getTags } = useBlog();
import { ref, computed, onBeforeMount } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
        default: ''
    }
});

const post = ref('');
const keywords = ref('');
const title = ref('');
const description = ref('');


function getKeyWords() {
    if (!blogTags.value) {
        return [];
    }
    const blogTags = _.cloneDeep(blogTags.value);
    const savedTags = _.cloneDeep(tags.value);
    const tagIds = blogTags.filter(blogTag => blogTag.blog_id === parseInt(props.id)).map(blogTag => blogTag.tags_id);
    return savedTags.filter(tag=> _.includes(tagIds, tag.id)).map(tag=> tag.tag).join(',');
}

function updateMetaData() {
    title.value = post.value.title;
    keywords.value = getKeyWords();
    description.value = post.value.excerpt;
}

function publishedDate(published_date) {
    return moment(published_date).format('MMM D YYYY');
}

async function getPost() {
    const response = await client.getItem('blog', props.id);
    post.value = response.data;
    updateMetaData();
}

const head = {
    title() {
        return {
            inner: title.value
        };
    },
    meta() {
        return [
            { name: 'description', content: description.value },
            { name: 'keywords', content: keywords.value }
        ];
    }
}

onBeforeMount(async () => {
    await getPost();
    await getBlogTags();
    await getTags();
    pageview({
        page: '/post',
        title: post.value.title,
        location: window.location.href
    });
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
    margin-top: 18px;
}
.blog-post {
    width: 100%;
}
.dark-theme{
    .blog-post{
        height: 100vh;
    }
}

</style>
