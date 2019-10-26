import Vue from 'vue';
import VueI18n from 'vue-i18n';
import about from '@/copy/About/en/about';
import photography from '@/copy/Photography/en/photography';

Vue.use(VueI18n);

const messages = {
    en: {
        common: {
            shuffle: 'Shuffle',
            back: 'Back',
            readMore: 'Read More',
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
            random: 'Random',
            seeMore: 'See More Images'
        },
        blogWidget: {
            header: 'Latest Blog Post',
            seeMore: 'See More Blog Posts'
        },
        quotesWidget: {
            header: 'A Random Quote I Like'
        },
        home: {
            content: `
            <p>Hello, my name is Edward Paulo Ganuelas and this is my personal site.</p>
            <p>For those who are wondering, what is the purpose of this site? Well the purpose is that this site would focus more
            on Edward the person more than Edward the developer. My hobbies, photographs, personal blog and small things about me would be found here.</p>
            <p>If you are interested to know more about Edward the developer, checkout my other site <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a> or my <a href="https://github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer">Github</a> page.</p>
            `
        },
        about,
        photography,
        blog: {
            filters: 'Filters',
            clear: 'Clear',
            publishedOn: 'Published On'
        }
    }
}

export default new VueI18n({
    locale: 'en',
    messages
});