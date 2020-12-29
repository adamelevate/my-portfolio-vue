import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from './firebase'; // eslint-disable-line no-unused-vars

import Plugins from './plugins/plugins'

import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "240771366" }
}, router);



require("../public/fonts/AttikaGX.ttf");

require("../public/fonts/MADETommySoftBoldPERSONALUSE.eot");
require("../public/fonts/MADETommySoftBoldPERSONALUSE.eot?#iefix");
require("../public/fonts/MADETommySoftBoldPERSONALUSE.otf");
require("../public/fonts/MADETommySoftBoldPERSONALUSE.svg");
require("../public/fonts/MADETommySoftBoldPERSONALUSE.ttf");
require("../public/fonts/MADETommySoftBoldPERSONALUSE.woff");
require("../public/fonts/MADETommySoftBoldPERSONALUSE.woff2");


require("../public/fonts/carton-slab-webfont.eot");
require("../public/fonts/carton-slab-webfont.woff");
require("../public/fonts/carton-slab-webfont.ttf");
require("../public/fonts/carton-slab-webfont.svg");

import '../public/fonts/webfont.css';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Plugins);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
