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
                        <li v-for="item in subNavItems" :key="item.to" class="flex-auto">
                            <router-link 
                                :to="item.to" 
                                class="text-blue text-center block">
                                <span class="ico"><i :class="item.icon"></i></span>
                                {{$t(item.text)}}
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
import { computed } from 'vue';
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

const SUB_NAV_ITEMS = Object.freeze([
    {
        to: '/about/',
        icon: 'fas fa-user',
        text: 'about.nav.bio',
        enabled: true
    },
    {
        to: '/about/facts',
        icon: 'fas fa-info-circle',
        text: 'about.nav.facts',
        enabled: false
    },
    {
        to: '/about/about-site',
        icon: 'fas fa-asterisk',
        text: 'about.nav.aboutSite',
        enabled: true
    },
    
])

const subNavItems = computed(() => {
    return SUB_NAV_ITEMS.filter(item => item.enabled);
})

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
