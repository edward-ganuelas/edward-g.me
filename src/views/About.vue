<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-8 subIntro">
                <img src="../../assets/profile.jpg" class="profile" alt="Edward Ganuelas" v-if="false" />
                <h2 class="mb-4">{{$t('about.header')}}</h2>
                <p>A little something, something</p>
            </div>
        </div>
        <div class="row sub-nav nav">
            <div class="col-12">
                <nav class="container mx-auto bg-orange mt-2 mb-2 rounded-2xl">
                    <ul class="flex flex-row size-full p-4 divide-x divide-blue">
                        <li class="flex-auto">
                            <router-link to="/about/" class="text-blue text-center block">
                                <span class="ico"><i class="fas fa-user"></i></span>
                                {{$t('about.nav.bio')}}
                            </router-link>
                        </li>
                        <li class="flex-auto" v-if="false">
                            <router-link to="/about/facts" class="text-blue text-center block">
                                <span class="icon"><i class="fas fa-info-circle"></i></span>
                                    {{$t('about.nav.facts')}}
                            </router-link>
                        </li>
                        <li class="flex-auto">
                            <router-link to="/about/about-site" class="text-blue text-center block">
                                <span class="ico"><i class="fas fa-asterisk"></i></span>
                                {{$t('about.nav.aboutSite')}}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
const meta =  {
    title: 'About',
    description: 'Personal Site of Edward Ganuelas',
    keywords:
        'developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe'
};

const head = {
    title() {
        return {
            inner: meta.title
        };
    },
    meta() {
        return [
            {
                name: 'description',
                content: meta.description,
                id: 'description'
            },
            { 
                name: 'keywords', 
                content: meta.keywords, 
                id: 'keywords' 
            }
        ];
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

img {
    &.profile {
        width: 120px;
        height: 120px;
        border: 1px solid #fff;
        border-radius: 8px;
        margin-bottom: 16px;
    }
}

</style>
