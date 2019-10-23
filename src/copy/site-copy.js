import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        common: {
            shuffle: 'Shuffle'
        },
        aboutWidget: {
            header: 'A Random Fact About Me'
        },
        developmentNews: {
            header: 'Development News',
            readMorePreLink: 'Read More from the',
            readMorePostLink: 'eightrayedsun blog.'
        },
        nav: {
            home: 'Home',
            about: 'About',
            photography: 'Photography'
        },
        imageGrid: {
            orderBy: 'Order By:',
            old: 'Oldest at Top',
            new: 'Newest at Top',
            random: 'Random'
        }
    }
}

export default new VueI18n({
    locale: 'en',
    messages
});