// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueHead from 'vue-head'
require('../node_modules/vuetify/dist/vuetify.min.css');
require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueHead);
Vue.use(Vuetify)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
