<template>
    <div class="row developmentNews card shadow">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>{{$t('developmentNews.header')}}</h2>
                </div>
                <div class="col-12">
                    <h3>{{post.title}}</h3>
                    <p>{{post.excerpt}}</p>
                    <p>{{$t('developmentNews.readMorePreLink')}} <a :href="blogLink" target="_blank" rel="noopener noreferrer" @click="tracking('eightrayedsun blog')">{{$t('developmentNews.readMorePostLink')}}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    name: "DevelopmentNews",
    props: ['post'],
    methods: {
        tracking(site) {
            this.$ga.event({
                eventCategory: `Clicked ${site}`,
                eventAction: "click"
            });
        }
    },
    computed: {
        blogLink() {
            const title = _.kebabCase(this.post.title);
            return `https://blog.eightrayedsun.com/#/post/${title}?id=${
                this.post.id
            }`;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.developmentNews{
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
