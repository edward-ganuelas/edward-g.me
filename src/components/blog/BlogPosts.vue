<template>
    <div class="posts">
        <div class="container" v-if="this.savedPost !== ''">
            <div class="row">
                <div class="col-12 col-lg-7 col-md-12">
                    <blog-filters />
                </div>
                <div class="col-12 col-lg-7">
                    <transition-group name="fade" leave-active-class="fadeOutRight">
                        <div class="col-12" v-for="post in orderedPosts" v-bind:key="post.id">
                            <div class="card shadow">
                                <div class="card-body">
                                    <h2 class="headline card-title">{{post.title}}</h2>
                                    <author v-bind:author="post.author" v-if="post.author" />
                                    <p v-if="post.published_date">
                                        Published on {{publishedDate(post.published_date)}}
                                    </p>
                                <ul v-if="post.tags.data" class="tags">
                                    <li>Tags:</li>
                                    <li v-for="tag in post['personal-tags'].data" :key="tag.id">
                                        {{tag.tag}}
                                    </li>
                                </ul>
                                <blockquote class="card-text">{{post.excerpt}}</blockquote>
                                <router-link :to="{name: 'Post', params: { title: kebabTitle(post.title) }, query: { id: post.id } }">Read More</router-link>
                                </div>
                            </div>
                        </div>   
                    </transition-group>   
                </div>
            </div>
            <spinner :spin="spin" />
        </div>
    </div>
</template>

<script>
import { DIRECTUS, PERSONAL_BLOG } from "../../api/apis";
import BlogFilters from "./BlogFilters";
import Author from "./Author";
import _ from "lodash";
import { get, sync } from "vuex-pathify";
import axios from "axios";
import Spinner from "../Spinner";

export default {
    name: "blog-posts",
    data() {
        return {
            spin: false
        };
    },
    components: {
        Author,
        BlogFilters,
        Spinner
    },
    methods: {
        async getPosts() {
            this.spin = true;
            const response = await axios.get(`${DIRECTUS}${PERSONAL_BLOG}`);
            this.savedPost = response.data.data;
            this.spin = false;
            localStorage.setItem("blog-edward-g", JSON.stringify(response.data.data));
            localStorage.setItem("blog-edward-g-last-update", Date.now());
        },
        publishedDate(published_date) {
            let date = new Date(published_date);
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            return (
                date.getDate() +
                "/" +
                months[date.getMonth()] +
                "/" +
                date.getFullYear()
            );
        },
        filterClicked(data) {
            this.filter = data;
        },
        resetPosts() {
            this.posts = this.originalPosts.slice();
        },
        kebabTitle(title) {
            return _.kebabCase(title);
        }
    },
    computed: {
        orderedPosts() {
            return _.sortBy(this.filteredPosts, (x) => {
                return new Date(x.published_date);
            }).reverse();
        },
        savedPost: sync("BlogPosts"),
        filter: get("Filter"),
        filteredPosts() {
            if (this.filter === "") {
                return this.savedPost;
            }
            let filteredPosts = this.savedPost;

            filteredPosts = filteredPosts.filter((x) => {
                let filterCheck = false;
                x['personal-tags'].data.forEach((element) => {
                    if (element.tag === this.filter) {
                        filterCheck = true;
                    }
                });
                return filterCheck;
            });
            return filteredPosts;
        }
    },
    watch: {
        filtereas(value) {
            this.resetPosts();
            let filteredPosts = this.savedPost;
            if (value !== "clear") {
                filteredPosts = filteredPosts.filter((x) => {
                    let filterCheck = false;
                    x['personal-tags'].data.forEach((element) => {
                        if (element.tag === value) {
                            filterCheck = true;
                        }
                    });
                    return filterCheck;
                });
            }
            this.posts = filteredPosts;
        }
    },
    beforeMount() {
        const posts = localStorage.getItem("blog-edward-g");
        const today = Date.now();
        const lastFetch = localStorage.getItem("blog-edward-g-last-update");
        const milisecondsToDay = 86400000;
        const daysSinceLastUpdate = today - lastFetch;
        if (!posts) {
            this.getPosts();
        } else {
            if (daysSinceLastUpdate > milisecondsToDay) {
                this.getPosts();
            } else {
                this.savedPost = JSON.parse(posts);
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.posts {
    width: 100%;
}
ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    width: 100%;
    li {
        display: inline-block;
        margin-right: 10px;
        &:first-child {
            margin-left: 18px;
        }
    }
}
.tags {
    li {
        font-style: italic;
        &:first-child {
            margin-left: 0;
        }
    }
}
.card__actions {
    .btn {
        margin-left: 18px;
    }
}
.card {
    margin-bottom: 18px;
}
</style>
