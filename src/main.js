// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/copy/site-copy';
import VueGtagPlugin from 'vue-gtag';
import { createPinia } from 'pinia';
import './index.css';


const app = createApp(App)
const pinia = createPinia()

app.use(router);
app.use(i18n)
app.use(VueGtagPlugin, {
    config: {
        id: 'UA-112626956-1'
    }
}, router)
app.use(pinia)

app.mount('#app');
