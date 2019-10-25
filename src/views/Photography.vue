<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-8 subIntro">
                <h2>{{$t('photography.header')}}</h2>
                <h3>{{$t('photography.subHeader')}}</h3>
            </div>
        </div>
        <div class="row sub-nav">
            <div class="col-12">
                <nav class="container">
                    <ul class="row">
                        <li class="col">
                            <router-link to="/photography"><span class="ico"><i class="fas fa-images"></i></span>
                                {{$t('photography.nav.photos')}}
                            </router-link>
                        </li>
                        <li class="col">
                            <router-link to="/photography/gear"><span class="ico"><i class="fas fa-camera"></i></span>
                                {{$t('photography.nav.gear')}}
                            </router-link>
                        </li>
                        <li class="col" v-if="false">
                            <router-link to="/photography/projects">{{$t('photography.nav.photoProjects')}}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Photography',
    data() {
        return {
            content: '',
            meta: {
                title: 'Photography',
                description: 'Personal Site of Edward Ganuelas',
                keywords:
                'developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe'
            },
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
                { name: 'keywords', content: this.meta.keywords, id: 'keywords' }
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
