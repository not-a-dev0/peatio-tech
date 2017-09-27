// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import 'animate.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import './assets/css/style.css'

import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/js/plugins.js'
import './assets/js/menu.js'
import './assets/js/custom.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
