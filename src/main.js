// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import VueMasonry from 'vue-masonry-css';
import VueImg from 'v-img';
import VueAnalytics from 'vue-analytics';
import store from './vuex/store';
import Ripple from 'vue-ripple-directive';
require('vue2-animate/dist/vue2-animate.min.css')

Ripple.color = 'rgba(0, 102, 255, 0.9)';

Vue.use(VueHead);
Vue.use(VueMasonry);
Vue.use(VueImg);
Vue.use(VueAnalytics, {
    id: 'UA-112626956-1',
    router,
    debug: {
        sendHitTask: process.env.NODE_ENV === 'production'
    }
})
Vue.directive('ripple', Ripple);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h=>h(App)
}).$mount('#app')
