<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">{{$t('about.bio.header')}}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <div class="card-body" v-html="$t('about.bio.content')"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bio',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
    &.profile{
        width: 120px;
        height: 120px;
        border: 1px solid #FFF;
        border-radius: 8px;
        margin-bottom: 16px;
    }
}
h2, h3{
    margin-bottom: 20px;
}
ul{
    padding-left: 16px;
    li{
        margin-bottom: 8px;    
    }
}
</style>
