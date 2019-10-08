<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-8 subIntro">
                <h2>Photography</h2>
                <h3>A section about a hobby</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-2">
                <nav class="container">
                    <ul class="row">
                        <li class="col">
                            <router-link to="/photography">Photos</router-link>
                        </li>
                        <li class="col">
                            <router-link to="/photography/gear">Gear</router-link>
                        </li>
                        <li class="col" v-if="false">
                            <router-link to="/photography/projects">Photo Projects</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Photography",
    data() {
        return {
            content: "",
            meta: {
                title: "Photography",
                description: "Personal Site of Edward Ganuelas",
                keywords:
                "developer, javascript, photography, filipino, blog, nikon, gaming, basketball, raptors, nba, wrestling, wwe"
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
                    name: "description",
                    content: this.meta.description,
                    id: "description"
                },
                { name: "keywords", content: this.meta.keywords, id: "keywords" }
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
                text-decoration: underline;
                color: #212529;
                cursor: default;
            }
        }
    }
    @media (min-width: 768px) {
        display: inline;
        padding-left: 0;
        li{
            border-right: none;
        }
    }
}
</style>
