import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/public.css';
import './assets/css/swiper.min.css';
import '../static/js/jquery-1.8.3.min';
import '../static/js/swiper.jquery.min';
import '../static/js/gVerify';
import Resource from 'vue-resource';
import VueLazyload from 'vue-lazyload';


Vue.use(Resource);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'src/assets/img/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
