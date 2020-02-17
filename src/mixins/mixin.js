import _ from 'lodash';
import { sync } from 'vuex-pathify';
import client from '@/directus';

export default {
    methods: {
        async getPosts() {
            if (_.isObject(this.savedPost)) {
                return;
            }
            const response = await client.getItems('blog', {
                filter: {
                    blog_type: 'personal'
                }
            });
            return response.data;
        },
        async getBlogTags() {
            if (_.isObject(this.savedBlogTags)) {
                return;
            }
            const response = await client.getItems('blog_tags');
            return response.data;
        },
        async getTags() {
            if (_.isObject(this.savedTags)) {
                return;
            }
            const response = await client.getItems('tags', {
                filter: {
                    tag_type: 'personal',
                }
            });
            return response.data;
        },
    },
    computed: {
        savedPost: sync('BlogPosts'),
        savedBlogTags: sync('BlogTags'),
        savedTags: sync('Tags'), 
    },
}