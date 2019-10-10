<template>
    <div class="row blogWidget card shadow">
        <div class="container">
            <div class="row" v-if="content !== ''">
                <div class="col-12">
                    <h2>Latest Blog Post</h2>
                </div>
                <div class="col-12">
                    <h3>{{content.title}}</h3>
                    <p>{{content.excerpt}}</p>
                    <p><router-link :to="{name: 'Post', params: {title: kebabTitle(content.title)}, query: {id: content.id}}" >Read More</router-link></p>
                    <p><router-link to="/blog">See More Blog Posts</router-link></p>
                </div>
            </div>
            <spinner :spin="spin" />
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import { DIRECTUS, PERSONAL_BLOG } from "../api/apis";
import Spinner from './Spinner';
import axios from 'axios';

export default {
    name: "BlogWidget",
    components:{
        Spinner
    },
    data() {
        return {
            content: "",
            spin: false
        };
    },
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
    },
    mounted() {
        (async () => {
            try {
                this.spin = true;
                const response = await axios.get(`${DIRECTUS}${PERSONAL_BLOG}?limit=1&order[published_date]=DESC`);
                this.content = response.data.data[0];
                this.spin = false;
            } catch (e) {
                console.log(e);
                this.spin = false;
            }
        })();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.developmentNews{
  margin-top: 24px;
  margin-bottom: 24px;
}
.blogWidget{

}
</style>
