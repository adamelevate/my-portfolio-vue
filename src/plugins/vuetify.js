import Vue from 'vue';
import Vuetify from 'vuetify'
// import Vuetify, {VApp,VCard, VIcon, VSkeletonLoader } from 'vuetify/lib';

Vue.use(Vuetify);
// Vue.use(Vuetify, {
//   components: {
//       VApp,
//       VCard,
//       VIcon,
//       VSkeletonLoader,
//      /* other imports */
//   },
// });

export default new Vuetify({
  theme: {
    themes: {
      light:{
        primary: '#4B85E0',
        // primary: '#2980b9',
        // primary: '#0d93f2',
        // secondary: '#6c394c',
        // secondary: '#d35400',
        secondary: '#f00658',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
    options: {
      customProperties: true,
    },
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
