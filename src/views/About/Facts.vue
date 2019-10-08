<template>
    <div class="col-12 col-sm-10">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-8">
                    <h3>Just some random facts about me.</h3>
                </div>
                <div class="col-12 col-sm-8">
                    <ul>
                        <li v-for="(copy, index) in content" v-bind:key="index">{{copy}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import about from '../../copy/about';
export default {
    name: "Facts",
    data() {
        return {
            content: about,
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
    &.profile{
        width: 120px;
        height: 120px;
        border: 1px solid #FFF;
        border-radius: 8px;
        margin-bottom: 16px;
    }
}
h2, h3{
    margin-bottom: 20px;
}
ul{
    padding-left: 16px;
    li{
        margin-bottom: 8px;    
    }
}
</style>
