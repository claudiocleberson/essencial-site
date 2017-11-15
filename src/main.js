// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
Vue.config.productionTip = false

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.use(VueScrollTo, {
  container: "body",
     duration: 1000,
     easing: "ease",
     offset: -80,
     cancelable: true,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  scrollTo,
  template: '<App/>',
  components: { App }
})
