<template>
    <p class="author card-subtitle" v-if="author">{{author.name}}</p>
</template>

<script>
import client from '@/directus';
import Author from '@/classes/author';

export default {
    name: 'Author',
    props: ['authorId'],
    data() {
        return {
            author: null
        };
    },
    methods: {
        getAuthor() {
            return client.getUser(this.authorId, {
                fields: ['first_name', 'last_name']
            });
        }
    },
    async beforeMount() {
        const author = await this.getAuthor();
        this.author = new Author(author.data.first_name, author.data.last_name);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
