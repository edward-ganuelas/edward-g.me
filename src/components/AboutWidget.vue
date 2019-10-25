<template>
    <div class="aboutWidget row widget">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>{{$t('aboutWidget.header')}}</h2>
                </div>
                <div class="col-12">
                    <p>{{content}}</p>
                    <button @click="setContent" class="btn btn-light" :title="$t('common.shuffle')">
                        <i class="fas fa-random"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import About from '@/copy/about';
export default {
    name: 'AboutWidget',
    data() {
        return {
            content: '',
            aboutIterator: '',       
        };
    },
    methods: {
        setContent() {
            const iterator = this.aboutIterator.next();
            if (iterator.done) {
                return this.initializeGenerator();
            }
            this.content = iterator.value;
            this.$ga.event({
                eventCategory: `Load Random About`,
                eventAction: 'click',
            });
        },
        *aboutGenerator() {
            const shuffledAboutFacts = _.shuffle(_.cloneDeep(About));
            for (let i = 0; i < shuffledAboutFacts.length; i++) {
                yield shuffledAboutFacts[i];
            }
        },
        initializeGenerator() {
            this.aboutIterator = this.aboutGenerator();
            this.content = this.aboutIterator.next().value;
        },
    },
    mounted() {
        if (!_.isObject(this.aboutIterator)) {
            this.initializeGenerator();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dark-theme{
    button{
        background-color: #C0C0C0;
        border-color: #C0C0C0;
    }
}
</style>
