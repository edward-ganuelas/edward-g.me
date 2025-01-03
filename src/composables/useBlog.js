import _ from 'lodash';
import { useApplicationStore } from '@/store/useApplicationStore';
import { storeToRefs } from 'pinia'

export function useBlog() {
    const store = useApplicationStore()
    const { blogPosts, blogTags, tags } = storeToRefs(store);

    async function getPosts() {
        if (_.isObject(blogPosts.value)) {
            return;
        }
        const response = await client.getItems('blog', {
            filter: {
                blog_type: 'personal'
            }
        });
        return response.data;
    }

    async function getBlogTags() {
        if (_.isObject(blogTags.value)) {
            return;
        }
        const response = await client.getItems('blog_tags');
        return response.data;
    }

    async function getTags() {
        if (_.isObject(tags.value)) {
            return;
        }
        const response = await client.getItems('tags', {
            filter: {
                tag_type: 'personal',
            }
        });
        return response.data;
    }

    return { blogPosts, blogTags, tags, getPosts, getBlogTags, getTags }
}