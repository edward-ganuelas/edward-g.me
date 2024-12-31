<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">{{$t('about.bio.header')}}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <!-- <div class="card-body" v-html="$t('about.bio.content')"></div> -->
                <div class="card-body">
                    <i18n-t keypath="about.bio.paragraph1" tag="p"></i18n-t>
                    <i18n-t keypath="about.bio.paragraph2" tag="p"></i18n-t>
                    <i18n-t keypath="about.bio.paragraph3" tag="p">
                        <template v-slot:twitter>
                            <a href="https://twitter.com/edward_pau" target="_blank"  rel="noopener noreferrer"><i class="fab fa-twitter"></i>@edward_pau</a>
                        </template>
                        <template v-slot:instagram>
                            <a href="https://www.instagram.com/edward.g.me/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> instagram</a>
                        </template>
                        <template v-slot:linkedIn>
                            <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a>
                        </template>
                    </i18n-t>
                    <i18n-t keypath="about.bio.paragraph4" tag="p">
                        <template v-slot:eightRayedSun>
                            <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a>
                        </template>
                    </i18n-t>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
