<template>
    <div class="header bg-blue rounded-bl-md rounded-br-md lg:h-48 lg:pb-18px">
        <div class="container mx-auto">
            <div class="grid">
                <div class="container">
                    <div class="row">
                        <div class="grid">
                            <h1 class="text-3xl">
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

<script setup>
import axios from 'axios';
import _ from 'lodash';
import TagLine from '@/components/TagLine.vue';
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const content = ref('');
const tagLines = ref([]);
const selectedTagLine = ref('');
const taglineIterator = ref({});

async function getContent() {
    axios.get('static/json/header.json').then((x) => {
        content.value = x.data.content;
        tagLines.value = x.data.content.tagLines;
        setTagLine();
    });
}

function *tagLineGenerator() {
    const _tagLines = _.shuffle(_.cloneDeep(tagLines.value));
    for (let i = 0; i < _tagLines.length; i++) {
        yield _tagLines[i];
    }
}

function initializeGenerator() {
    taglineIterator.value = tagLineGenerator();
    selectedTagLine.value = taglineIterator.value.next().value;
}

function setTagLine() {
    const iterator = taglineIterator.value.next();
    if (iterator.done) {
        return initializeGenerator();
    }
    selectedTagLine.value = iterator.value;
}

onBeforeMount(() => {
    getContent();
    initializeGenerator();
})
router.afterEach(()=>{
    setTagLine();
});
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
    // background-color: #0066ff;
    // border-bottom-right-radius: 5px;
    // border-bottom-left-radius: 5px;
    // height: $headerMobileHeight;
    @media (min-width: 1024px) {
        // height: $headerHeight;
        // padding-bottom: 18px;
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
