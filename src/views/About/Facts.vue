<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>{{$t('about.facts.header')}}</h3>
            </div>
            <div class="col-12 col-md-8 offset-md-2 card shadow">
                <div class="card-body">
                    <ul>
                        <li v-for="(copy, index) in facts" v-bind:key="index">{{copy}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import factsMixin from '@/mixins/facts';

export default {
    name: 'Facts',
    mixins: [factsMixin],
    beforeMount() {
        this.getFacts();
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
