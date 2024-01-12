<template>
    <div class="container-fluid header">
        <div class="row">
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1>
                                <router-link to="/">
                                    <svg width="200" height="60">
                                        <text x="0" y="40">edward-g.me</text>
                                    </svg>
                                </router-link>
                                <span>{{content.subHero}}</span>
                            </h1>
                            <tag-line :tagLine=selectedTagLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import TagLine from '@/components/TagLine.vue';
export default {
    name: 'HeaderNav',
    components:{
        TagLine
    },
    data() {
        return {
            content: '',
            tagLines: [],
            selectedTagLine: '',
            taglineIterator: null,
        };
    },
    methods: {
        async getContent() {
            axios.get('static/json/header.json').then((x) => {
                this.content = x.data.content;
                this.tagLines = x.data.content.tagLines;
                this.setTagLine();
            });
        },
        *tagLineGenerator() {
            const tagLines = _.shuffle(_.cloneDeep(this.tagLines));
            for (let i = 0; i < tagLines.length; i++) {
                yield tagLines[i];
            }
        },
        initializeGenerator() {
            this.taglineIterator = this.tagLineGenerator();
            this.selectedTagLine = this.taglineIterator.next().value;
        },
        setTagLine() {
            const iterator = this.taglineIterator.next();
            if (iterator.done) {
                return this.initializeGenerator();
            }
            this.selectedTagLine = iterator.value;
        },
    },
    beforeMount() {
        this.getContent();
        this.initializeGenerator();
        this.$router.afterEach(()=>{
            this.setTagLine();
        });
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/variables.scss";
h1 {
    a {
        text-decoration: none;
        color: #212529;
    }
    span{
        font-size: 1rem;
        font-family: "Questrial", sans-serif;
        font-weight: normal;
        display: block;
    }
    @media (min-width: 1024px) {
        margin-top: 24px;
    }
}
.header {
    background-color: #0066ff;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    height: $headerMobileHeight;
    @media (min-width: 1024px) {
        height: $headerHeight;
        padding-bottom: 18px;
    }
}
.change-theme{
    margin: 30px auto 30px auto;
    display: block;
}
.dark-theme{
    .theme-toggle{
        background-color: #1900ff;
        border-color: #1900ff;
        color: #C0C0C0;
    }
    h1{
        a{
        color: #C0C0C0!important;
        }
    }
}

</style>
