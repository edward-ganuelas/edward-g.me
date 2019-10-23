<template>
    <div class="quotesWidget row card shadow">
        <div class="col-12">
            <h2>A Random Quote I Like</h2>
        </div>
        <div class="col-12">
            <blockquote><em>{{content}}</em></blockquote>
            <button @click="setContent" class="btn btn-light"><i class="fas fa-random"></i></button>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import Quotes from '@/copy/quotes';
export default {
    name: 'QuotesWidget',
    data() {
        return {
            content: '',
            quoteIterator: '',
        };
    },
    methods: {
        getRandomContent() {
            const randomNumer = _.random(0, Quotes.length - 1);
            this.$ga.event({
                eventCategory: `Load Random Quote`,
                eventAction: 'click',
            });
            return Quotes[randomNumer];
        },
        setContent() {
            const iterator = this.quoteIterator.next();
            if (iterator.done) {
                return this.initializeGenerator();
            }
            this.content = iterator.value;
        },
        *quoteGenerator() {
            const shuffledQuotes = _.shuffle(_.cloneDeep(Quotes));
            for (let i = 0; i < shuffledQuotes.length; i++) {
                yield shuffledQuotes[i];
            }
        },
        initializeGenerator() {
            this.quoteIterator = this.quoteGenerator();
            this.content = this.quoteIterator.next().value;
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
.quotesWidget {
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
