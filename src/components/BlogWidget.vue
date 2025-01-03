<template>
    <div class="row blogWidget widget">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2><span class='ico'><i class="fas fa-file-alt"></i></span> {{$t('blogWidget.header')}}</h2>
                </div>
                <div class="col-12">
                    <h3>{{post.title}}</h3>
                    <p>{{post.excerpt}}</p>
                    <p><router-link :to="{name: 'Post', params: {title: kebabTitle(post.title)}, query: {id: post.id}}" >{{$t('common.readMore')}}</router-link></p>
                    <p><router-link to="/blog">{{$t('blogWidget.seeMore')}}</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { event } from 'vue-gtag';

export default {
    name: 'BlogWidget',
    props: ['post'],
    methods: {
        tracking(site) {
            event('click', {
                eventCategory: `Clicked ${site}`,
                eventAction: 'click'
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
