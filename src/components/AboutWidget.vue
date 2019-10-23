<template>
    <div class="aboutWidget row card shadow">
        <div class="col-12">
            <h2>A Random Fact About Me</h2>
        </div>
        <div class="col-12">
            <p>{{content}}</p>
            <button @click="setContent" class="btn btn-light">
                <i class="fas fa-random"></i>
            </button>
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
        getRandomContent() {
            const randomNumer = _.random(0, About.length -1);
            this.$ga.event({
                eventCategory: `Load Random About`,
                eventAction: 'click',
            });
            return About[randomNumer];
        },
        setContent() {
            this.content = this.getRandomContent();
        },
        *aboutGenerator() {
            const shuffledAboutFacts = _.shuffle(_.cloneDeep(About));
            for (let i = 0; i < shuffledAboutFacts.length; i++) {
                yield shuffledAboutFacts[i];
            }
        }
    },
    mounted() {
        this.setContent();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutWidget {
    margin-top: 24px;
    margin-bottom: 24px;
}
.dark-theme{
    button{
        background-color: #C0C0C0;
        border-color: #C0C0C0;
    }
}
</style>
