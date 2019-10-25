<template>
    <div class="row blogWidget widget">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Latest Blog Post</h2>
                </div>
                <div class="col-12">
                    <h3>{{post.title}}</h3>
                    <p>{{post.excerpt}}</p>
                    <p><router-link :to="{name: 'Post', params: {title: kebabTitle(post.title)}, query: {id: post.id}}" >Read More</router-link></p>
                    <p><router-link to="/blog">See More Blog Posts</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    name: "BlogWidget",
    props: ['post'],
    methods: {
        tracking(site) {
            this.$ga.event({
                eventCategory: `Clicked ${site}`,
                eventAction: "click"
            });
        },
        kebabTitle(title) {
            return _.kebabCase(title);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blogWidget{

}
</style>
