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
        }
    }
}

export default new VueI18n({
    locale: 'en',
    messages
});