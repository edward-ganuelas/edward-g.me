<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">{{$t('music.header')}}</h3>
            </div>
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <div class="card-body" v-html="$t('music.mainContent')">
                </div>
            </div>
            <div class="col-12 col-md-8 offset-md-2">
                <h4>{{$t('music.thumbsUp')}}</h4>
            </div>
            <div class="col-12 col-md-8 offset-md-2">
                <iframe src="https://open.spotify.com/embed/playlist/2x1J9ljH70wgHi1Amwezhj" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Music',
    data() {
        return {
            filter: '',
        };
    },
    computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2,
h3 {
    margin-bottom: 20px;
}
h4{
    margin-top: 18px;
}

* > .container {
    margin-top: 24px;
}
</style>
