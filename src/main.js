// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store';
import i18n from '@/copy/site-copy';
import VueGtagPlugin from 'vue-gtag';


const app = createApp(App)

app.use(store);
app.use(router);
app.use(i18n)
app.use(VueGtagPlugin, {
    config: {
        id: 'UA-112626956-1'
    }
}, router)

app.mount('#app');
