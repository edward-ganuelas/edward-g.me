<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-8 subIntro">
                <!-- <img src="../../assets/profile.jpg" class="profile" alt="Edward Ganuelas" v-if="false" /> -->
                <h2>{{$t('about.header')}}</h2>
                <p>A little something, something</p>
            </div>
        </div>
        <div class="row sub-nav">
            <div class="col-12">
                <nav class="container">
                    <ul class="row">
                        <li class="col">
                            <router-link to="/about/">
                                <span class="ico"><i class="fas fa-user"></i></span>
                                {{$t('about.nav.bio')}}
                            </router-link>
                        </li>
                        <li class="col">
                            <router-link to="/about/facts">
                                <span class="icon"><i class="fas fa-info-circle"></i></span>
                                    {{$t('about.nav.facts')}}
                            </router-link>
                        </li>
                        <li class="col">
                            <router-link to="/about/about-site">
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
                <transition name="slideUp" leave-active-class="dissapear">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            meta: {
                title: 'About',
                description: 'Personal Site of Edward Ganuelas',
                keywords:
                    'developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe'
            }
        };
    },
    head: {
        title() {
            return {
                inner: this.meta.title
            };
        },
        meta() {
            return [
                {
                    name: 'description',
                    content: this.meta.description,
                    id: 'description'
                },
                { 
                    name: 'keywords', 
                    content: this.meta.keywords, 
                    id: 'keywords' 
                }
            ];
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    margin-top: 18px;
}
img {
    &.profile {
        width: 120px;
        height: 120px;
        border: 1px solid #fff;
        border-radius: 8px;
        margin-bottom: 16px;
    }
}
h2,
h3 {
    margin-bottom: 20px;
}
ul {
    padding-left: 16px;
    li {
        margin-bottom: 8px;
    }
}
nav ul {
    li {
    list-style-type: none;
    border-right: 1px solid #0066ff;
    text-align: center;
    &:last-of-type {
        border-right: none;
    }
    a {
        &.router-link-exact-active {
        text-decoration: none;
        color: #212529;
        cursor: default;
        }
    }
    
    }
}
</style>
