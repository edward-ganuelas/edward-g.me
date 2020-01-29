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
            photography: 'Photography',
            music: 'Music',
            gaming: 'Gaming'
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
        },
        music: {
            header: 'Music',
            mainContent: `
            <p>I like music, I listen to music everyday to switch modes or prepare for a certain mindset. If I'm working on a mundane tasks I keep it on to keep my head energized. I also listen to music to prepare myself so that I can focus and ususally when I reach that state then the music stops.</p>
            <p>I listen to all kinds of music though I primarily listent to classic Rock and Rap. I sometimes listen to Disney music and I'm not particulary found of EDM or country. </p>
            <p>Some of my favorite classic acts are AC/DC, Queen, Tupac, and Eminem</p>
            <p><span class="strike">I'm one of the rare unicorns that uses Google Play Music</span> I primarily use Sportify and the following playlist is my auto 'Thumbs Up' playlist, a collection of random song from different genres and different artist. The way the playlist works is that songs in the top of the list is the newest one I liked.</p>
            `,
            thumbsUp: 'Thumbs Up',
            clear: 'Clear',
            title: 'Title',
            artist: 'Artist',
            album: 'Album'
        },
        gaming: {
            header: 'gaming',
            mainContent: `<p>Gaming has been one of my oldest hobbies. My first console was a Nintendo Famicom then the Nintendo Gameboy light, the Sony PlayStation, 
            PlayStation 3, PlayStation 4', Nintendo DS, Nintendo Switch and PC games. My favorite genres to play are JRPGs, sport games, some shooters and adventure games. Below is a list
            of what I'm currently playing.`,
            currentlyPlaying: 'Currently Playing'
        }
    }
}

export default new VueI18n({
    locale: 'en',
    messages
});