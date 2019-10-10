<template>
    <div class="blog-post">
        <div class="container" v-if="post !== ''">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2 card shadow">
                    <div class="card-body">
                        <h2>{{post.title}}</h2>
                        <author v-bind:author="post.author" v-if="post.author" />
                        <p v-if="post.published_date">Published on {{publishedDate(post.published_date)}}</p>
                        <div v-html="post.content"></div>
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <router-link to="/blog"><i class="fas fa-caret-left"></i> Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DIRECTUS, PERSONAL_BLOG } from "../../api/apis";
import Author from "./Author";
import axios from "axios";

export default {
    name: "BlogPost",
    props: ["id"],
    components: {
        Author
    },
    data() {
        return {
            post: "",
            keywords: "",
            title: "",
            description: ""
        };
    },
    methods: {
        async getPost() {
            let response = await axios.get(`${DIRECTUS}${PERSONAL_BLOG}/${this.id}`);
            this.post = response.data.data;
            window.setTimeout(() => {
                this.updateMetaData();
                this.$emit("updateHead");
            }, 2000);
        },
        publishedDate(published_date) {
            let date = new Date(published_date);
            return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        },
        updateMetaData() {
            this.title = this.post.title;
            this.keywords = this.getKeyWords();
            this.description = this.post.excerpt;
        },
        getKeyWords() {
            let keywords = [];
            this.post.tags.data.forEach((x) => {
                keywords.push(x.tag);
            });
            return keywords.join();
        }
    },
    beforeMount: function() {
        this.getPost();
        this.$ga.page({
            page: "/post",
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
                { name: "description", content: this.description },
                { name: "keywords", content: this.description }
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
