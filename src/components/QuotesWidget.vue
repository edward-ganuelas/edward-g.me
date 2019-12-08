<template>
    <div class="quotesWidget row widget">
        <div class="container">
            <div class="row">
                 <div class="col-12">
                    <h2><span class='ico'><i class="fas fa-quote-left"></i></span> {{$t('quotesWidget.header')}}</h2>
                </div>
                <div class="col-12">
                    <blockquote><em>{{content}}</em></blockquote>
                    <button v-ripple @click="setContent" class="btn btn-light"  :title="$t('common.shuffle')"><i class="fas fa-random"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import client from '@/directus';

export default {
    name: 'QuotesWidget',
    data() {
        return {
            content: '',
            quoteIterator: '',
            quotes: [],
        };
    },
    methods: {
        setContent() {
            const iterator = this.quoteIterator.next();
            if (iterator.done) {
                return this.initializeGenerator();
            }
            this.content = iterator.value;
            this.$ga.event({
                eventCategory: `Load Random Quote`,
                eventAction: 'click',
            });
        },
        *quoteGenerator() {
            const shuffledQuotes = _.shuffle(_.cloneDeep(this.quotes));
            for (let i = 0; i < shuffledQuotes.length; i++) {
                yield shuffledQuotes[i];
            }
        },
        initializeGenerator() {
            this.quoteIterator = this.quoteGenerator();
            this.content = this.quoteIterator.next().value;
        },
        async getQuotes() {
            const response = await client.getItems('quotes');
            this.quotes = response.data.map((quotes) => quotes.quote);
        }
    },
    async beforeMount() {
        await this.getQuotes();
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
