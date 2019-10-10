<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2 card shadow main-content">
                <div class="card-body">
                    <p>Hello, my name is Edward Paulo Ganuelas and this is my personal site.</p>
                    <p>For those who are wondering, what is the purpose of this site? Well the purpose is that this site would focus more
                    on Edward the person more than Edward the developer. My hobbies, photographs, personal blog and small things about me would be found here.</p>
                    <p>If you are interested to know more about Edward the developer, checkout my other site <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a> or my <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer">Github</a> page.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="container">
                    <blog-widget />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="container">
                    <development-news />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="container">
                    <about-widget />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="container">
                    <quotes-widget />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AboutWidget from '@/components/AboutWidget';
import QuotesWidget from '@/components/QuotesWidget';
import DevelopmentNews from '@/components/DevelopmentNews';
import BlogWidget from '@/components/BlogWidget';
export default {
    name: "Home",
    components: {
        AboutWidget,
        QuotesWidget,
        DevelopmentNews,
        BlogWidget
    },
    data() {
        return {
            content: "",
            meta: {
                title: "Home",
                description: "Personal Site of Edward Ganuelas",
                keywords: "developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe"
            }
        };
    },
    methods: {
        getContent() {
            axios.get("static/json/main.json").then((x) => {
                this.content = x.data.content;
            });
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
                { name: "description", content: this.meta.description, id: 'description' },
                { name: "keywords", content: this.meta.keywords, id: 'keywords' }
            ];
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-content {
    margin-bottom: 18px;
    @media(min-width: 1024px){
        margin-top: 18px;
    }
}
</style>
