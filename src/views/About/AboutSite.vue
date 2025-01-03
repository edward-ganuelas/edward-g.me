<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
            <h3 class="sr-only">{{$t('about.aboutSite.header')}}</h3>
        </div>
        <div class="col-12 col-md-8 offset-md-2 card shadow">
            <div class="card-body">
                <p>{{$t('about.aboutSite.tagLine')}}</p>
                <ul>
                    <li><a href="https://github.com/axios/axios" target="_blank" rel="noopener">Axios</a></li>
                    <li><a href="https://babeljs.io/" target="_blank" rel="noopener">Babel.js</a></li>
                    <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a></li>
                    <li><a href="https://www.chaijs.com/" target="_blank" rel="noopener">Chai.js</a></li>
                    <li><a href="https://www.docker.com/" target="_blank" rel="noopener">Docker</a></li>
                    <li><a href="https://eslint.org/" target="_blank" rel="noopener">ESLint</a></li>
                    <li><a href="https://fontawesome.com/" target="_blank" rel="noopener">Fontawesome</a>
                        <ul>
                            <li><a href="https://fontawesome.com/license/free" target="_blank" rel="noopener">License</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="https://lodash.com/" target="_blank" rel="noopener">Lodash</a></li>
                    <li><a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a></li>
                    <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a></li>
                    <li>
                        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
                        <ul>
                            <li>Vetur</li>
                            <li>Vuex</li>
                            <li>vue-router</li>
                            <li>vite</li>
                            <li>pinia</li>
                        </ul>
                    </li>
                    <li><a href="https://github.com/MatteoGabriele/vue-gtag" target="_blank" rel="noopener">vue-gtag</a></li>
                    <li><a href="https://wlada.github.io/vue-carousel-3d/" target="_blank" rel="noopener">vue-carousel-3d</a></li>
                </ul>
            </div>
        </div>
        </div>
    </div>

</template>

<script setup>
const meta = {
    title: 'About the Site',
    description: 'Personal Site of Edward Ganuelas - About the Site',
    keywords: 'developer, javascript, gaming, basketball, raptors, nba' 
};

const head =  {
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
        ]
    }
}
</script>

<script>
export default {
    name: 'AboutSite',
    data() {
        return {
            meta: {
                title: 'About the Site',
                description: 'Personal Site of Edward Ganuelas - About the Site',
                keywords: 'developer, javascript, gaming, basketball, raptors, nba' 
            }
        }
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
            ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
