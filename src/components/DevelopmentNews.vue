<template>
    <div class="row developmentNews widget">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2><span class='ico'><i class="fas fa-laptop-code"></i></span> {{$t('developmentNews.header')}}</h2>
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
import { event } from 'vue-gtag';

export default {
    name: 'DevelopmentNews',
    props: ['post'],
    methods: {
        tracking(site) {
            event('click', {
                eventCategory: `Clicked ${site}`,
                eventAction: 'click'
            });
        }
    },
    computed: {
        blogLink() {
            return `https://eightrayedsun.com/blog/${this.post.id}`;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
