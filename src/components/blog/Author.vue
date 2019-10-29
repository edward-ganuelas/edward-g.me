<template>
    <p class="author card-subtitle">{{name}}</p>
</template>

<script>
import axios from 'axios';
import { DIRECTUS, AUTHOR } from '@/api/apis';
export default {
    name: 'Author',
    props: ['author'],
    data() {
        return {
            name: ''
        };
    },
    methods: {
        async getAuthor() {
            let response = await axios.get(`${DIRECTUS}${AUTHOR}${this.author}`);
            this.name = `${response.data.data.first_name} ${response.data.data.last_name}`;
            localStorage.setItem(`edward-g_author_${this.author}`, this.name);
        }
    },
    beforeMount() {
        if (localStorage.getItem(`edward-g_author_${this.author}`) === null) {
            this.getAuthor();
        } else {
            this.name = localStorage.getItem(`edward-g_author_${this.author}`);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
