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

<script>
import mixin from '@/mixins/mixin';
import moment from 'moment';
import client from '@/directus';
import Author from '@/components/blog/Author.vue';
import _ from 'lodash';

export default {
    name: 'BlogPost',
    props: ['id'],
    mixins: [mixin],
    data() {
        return {
            post: '',
            keywords: '',
            title: '',
            description: ''
        };
    },
    components: {
        Author
    },
    methods: {
        async getPost() {
            const response = await client.getItem('blog', this.id);
            this.post = response.data;
            this.updateMetaData();
        },
        publishedDate(published_date) {
            return moment(published_date).format('MMM D YYYY');
        },
        updateMetaData() {
            this.title = this.post.title;
            this.keywords = this.getKeyWords();
            this.description = this.post.excerpt;
        },
        getKeyWords() {
            if (!this.savedBlogTags) {
                return [];
            }
            const blogTags = _.cloneDeep(this.savedBlogTags);
            const savedTags = _.cloneDeep(this.savedTags);
            const tagIds = blogTags.filter(blogTag => blogTag.blog_id === parseInt(this.id)).map(blogTag => blogTag.tags_id);
            return savedTags.filter(tag=> _.includes(tagIds, tag.id)).map(tag=> tag.tag).join(',');
        }
    },
    async beforeMount() {
        await this.getPost();
        await this.getBlogTags();
        await this.getTags();
        this.$ga.page({
            page: '/post',
            title: this.post.title,
            location: window.location.href
        });
    },
    head: {
        title() {
            return {
                inner: this.title
            };
        },
        meta() {
            return [
                { name: 'description', content: this.description },
                { name: 'keywords', content: this.keywords }
            ];
        }
    }
};
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
