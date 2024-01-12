// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import VueMasonry from 'vue-masonry-css';
import VueAnalytics from 'vue-analytics';
import store from './vuex/store';
import i18n from '@/copy/site-copy';
import Ripple from 'vue-ripple-directive';

Ripple.color = 'rgba(0, 102, 255, 0.9)';

const app = createApp(App)

app.use(VueHead);
app.use(VueMasonry);
app.use(store);
app.use(router);
app.use(i18n)
app.use(VueAnalytics, {
    id: 'UA-112626956-1',
    router,
    debug: {
        sendHitTask: process.env.NODE_ENV === 'production'
    }
})
app.directive('ripple', Ripple);

app.mount('#app');
